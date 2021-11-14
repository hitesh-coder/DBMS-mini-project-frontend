<template>
    <div>
        <div id="nav">
            <div
                class="position-absolute btn btn-danger messages"
                v-if="messages.error"
            >
                {{ messages.error }}
            </div>
            <div
                class="position-absolute btn btn-success messages"
                v-if="messages.success"
            >
                {{ messages.success }}
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div class="container-fluid">
                    <router-link class="navbar-brand" :to="{ name: 'Home' }"
                        >DBMS</router-link
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mb-2 mb-lg-0 ms-lg-auto">
                            <li class="nav-item">
                                <router-link
                                    to="/"
                                    class="nav-link"
                                    v-if="userId.length"
                                    >Home</router-link
                                >
                            </li>
                            <li class="nav-item" v-if="!userId.length">
                                <router-link
                                    :to="{ name: 'Login' }"
                                    class="nav-link"
                                    >Login</router-link
                                >
                            </li>
                            <li class="nav-item" v-if="!userId.length">
                                <router-link
                                    :to="{ name: 'Signup' }"
                                    class="nav-link"
                                    >Signup</router-link
                                >
                            </li>
                            <li class="nav-item" @click="logoutUser" v-else>
                                <span class="btn btn-danger nav-link fw-bolder"
                                    >Log Out
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    computed: {
        messages() {
            return this.$store.getters.messages;
        },
        userId() {
            return this.$store.getters.userId;
        },
    },
    methods: {
        async logoutUser() {
            await this.$store.dispatch("logoutUser");
            this.$router.push({ name: "Login" });
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.messages {
    top: 60px;
    right: 50px;
}

.custom-rounded{
    border-radius: 1rem;
}
</style>
