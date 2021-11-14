const authurl = "/api/auth/";
const profileurl = "/api/user/profile/";

/* eslint-disable no-async-promise-executor */

class postService {
    static createUser = async (user) => {
        // console.log(JSON.stringify( user ))
        try {
            let res = await fetch(authurl + 'signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(data => data.json());
            return res;
        } catch (err) {
            console.log(err)
        }
    }

    static loginUser = async (user) => {
        try {
            let res = await fetch(authurl + 'login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(data => data.json());
            return res;
        } catch (err) {
            console.log(err)
        }
    }

    static updateUserProfile = async (profileData) => {
        try {
            let res = await fetch(profileurl, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileData)
            }).then(data => data.json());
            return res;
        } catch (err) {
            console.log(err)
        }
    }
}

export default postService;
