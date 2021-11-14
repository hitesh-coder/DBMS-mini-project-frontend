import { createStore } from 'vuex'
import postService from "../postServices";
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (user) => {
  return jwt.sign({ user }, 'Secret Code', {
    expiresIn: maxAge
  });
};

const messageTime = 5000;

export default createStore({
  state: {
    currentUserId: '',
    currentUserDbId: '',
    authentication: {
      email: '',
      password: ''
    },
    messages: {
      success: '',
      error: ''
    },
    profileInfo:{
      name: null,
      registrationNumber: null,
      email: null,
      academicYear: null,
      semester: null,
      program: null
    }
  },
  mutations: {
    updateEmail(state, payload) {
      state.authentication.email = payload;
    },
    updatePassword(state, payload) {
      state.authentication.password = payload;
    },
    updateSuccessMessage(state, message) {
      state.messages.success = message;

      setTimeout(() => {
        state.messages.success = ''
      }, messageTime);
    },
    updateErrorMessage(state, message) {
      state.messages.error = message;

      setTimeout(() => {
        state.messages.error = ''
      }, messageTime);
    },
    updateCurrentUserDbId(state, userId) {
      state.currentUserDbId = userId;
    },
    updateCurrentUserId(state, userId) {
      state.currentUserId = userId;
    },
    updateProfileInfo(state,payload) {
      state.profileInfo.name = payload.name;
      state.profileInfo.registrationNumber = payload.registrationNumber;
      state.profileInfo.email = payload.email;
      state.profileInfo.academicYear = payload.academicYear;
      state.profileInfo.semester = payload.semester;
      state.profileInfo.program = payload.program;
    },
    resetStates(state) {
      state.authentication.email = '';
      state.authentication.password = '';
    },
    logoutUser(state) {
      localStorage.removeItem("jwt")
      state.currentUserId = ''
    }
  },
  actions: {
    async createUser({ state, commit }) {
      let credential = {
        email: state.authentication.email,
        password: state.authentication.password
      }
      try {
        let result = await postService.createUser(credential);
        if (result.id) {
          let profileData = {
            email: state.authentication.email
          }
          let res = await postService.updateUserProfile(profileData)
          commit("updateProfileInfo",res)
          const token = createToken(result);
          localStorage.setItem("jwt", token)
          commit("updateSuccessMessage", "User Created");
          commit("updateCurrentUserDbId", result.id)
          commit("updateCurrentUserId", result.id)
        }
        if (result.errors) {
          if (result.errors.email) {
            console.log(result.errors.email)
            commit("updateErrorMessage", result.errors.email)
          } else {
            commit("updateErrorMessage", result.errors.password)
          }
        }
      } catch (err) {
        commit("updateErrorMessage", err);
      }
    },

    async loginUser({ state, commit }) {
      let credential = {
        email: state.authentication.email,
        password: state.authentication.password
      }
      try {
        let result = await postService.loginUser(credential);
        if (result.id) {
          const token = createToken(result);
          localStorage.setItem("jwt", token)
          state.profileInfo.email = result.email
          commit("updateSuccessMessage", "You are logged in");
          commit("updateCurrentUserDbId", result.id)
          commit("updateCurrentUserId", result.id)
        }
        if (result.errors) {
          if (result.errors.email) {
            // console.log(result.errors.email)
            commit("updateErrorMessage", result.errors.email)
          } else {
            commit("updateErrorMessage", result.errors.password)
          }
        }
      } catch (err) {
        commit("updateErrorMessage", err);
      }
    },

    logoutUser(state) {
      state.commit("logoutUser");
    },
    
    async loginUserFromGoogle(state, payload) {
      const token = createToken(payload);
      localStorage.setItem("jwt", token)
      state.commit("updateSuccessMessage", "You are logged in");
      state.commit("updateCurrentUserId", payload)
    },

    async updateProfileInfo({state, commit}) {
      const res = await postService.updateUserProfile(state.profileInfo);
      commit("updateProfileInfo", res);
    }
  },
  modules: {
  },
  getters: {
    messages: (state) => state.messages,
    userId: (state) => state.currentUserId,
    profileInfo: (state) => state.profileInfo
  }
})
