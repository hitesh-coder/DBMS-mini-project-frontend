<template>
    <div class="home">
        <div class="container bg-body">
            <div class="border box mx-auto custom-rounded overflow-hidden mt-5">
                <div
                    class="
                        bg-dark
                        text-white
                        top-rounded
                        p-2
                        m-0
                        d-flex
                        flex-row
                        justify-content-between
                        align-items-center
                    "
                >
                    <span class="fs-3 fw-bold"> Student Profile </span>
                    <span>
                        <i
                            class="fas fa-user-edit me-2 fs-5"
                            style="cursor: pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#profileModal"
                        ></i>
                    </span>

                    <!-- Modal -->
                    <div
                        class="modal fade"
                        id="profileModal"
                        tabindex="-1"
                        aria-labelledby="profileModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content text-dark">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="profileModalLabel"
                                    >
                                        Edit your profile
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <fieldset disabled>
                                            <div class="mb-3">
                                                <label
                                                    for="userEmail"
                                                    class="form-label"
                                                    >Email address</label
                                                >
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="userEmail"
                                                    aria-describedby="userEmail"
                                                    v-model= profileInfo.email
                                                />
                                                <div
                                                    id="emailHelp"
                                                    class="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div class="mb-3">
                                            <label
                                                for="userName"
                                                class="form-label"
                                                >Name</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="userName"
                                                aria-describedby="userName"
                                                v-model= profileInfo.name
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                for="registrationNumber"
                                                class="form-label"
                                                >Registration Number</label
                                            >
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="registrationNumber"
                                                aria-describedby="registrationNumber"
                                                v-model= profileInfo.registrationNumber
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                for="academicYear"
                                                class="form-label"
                                                >Academic Year</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="academicYear"
                                                aria-describedby="academicYear"
                                                v-model= profileInfo.academicYear
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                for="semester"
                                                class="form-label"
                                                >Semester</label
                                            >
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="semester"
                                                aria-describedby="semester"
                                                v-model= profileInfo.semester
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label
                                                for="program"
                                                class="form-label"
                                                >Program</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="program"
                                                aria-describedby="program"
                                                v-model= profileInfo.program
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        @click="updateProfileInfo()"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped mb-0">
                    <tbody>
                        <tr>
                            <th scope="row">Profile Photo</th>
                            <td>
                                <i class="fas fa-user" style="font-size: 36px"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Name of Student</th>
                            <td>{{ profileInfo.name }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Registration Number</th>
                            <td>{{ profileInfo.registrationNumber }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email Id</th>
                            <td>{{ profileInfo.email }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Academic year</th>
                            <td>{{ profileInfo.academicYear }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Semester</th>
                            <td>{{ profileInfo.semester }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Program</th>
                            <td>{{ profileInfo.program }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
    computed: {
        profileInfo() {
            return this.$store.getters.profileInfo;
        },
    },
    methods: {
        updateProfileInfo() {
            this.$store.dispatch("updateProfileInfo")
        }
    }
};
</script>

<style lang="scss">
.box {
    width: fit-content;
}

.top-rounded {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.item-1 {
    width: 300px !important;
}

.item-2 {
    width: 400px !important;
}
</style>
