<template>
  <div class="home">
    <div class="container shadow p-3 mb-5 bg-body rounded ">
      <div class="row justify-content-center">
        <h2 class="bg-dark text-white h-100">Student Profile</h2>
        <div class="d-flex p-2 bd-highlight">
          <div class="list-group position-relative top-50 start-50 translate-middle">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 justify-content-center w-100 p-3">Profile Photo </li>
              <li class="list-group-item item-2 w-100 p-3">
                <img src="suga.jpg" class="rounded-circle" style="width: 100px; height: 100px;" />
              </li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Name of Student</li>
              <li class="list-group-item item-2 w-100 p-3">Full name of student</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Registration Number</li>
              <li class="list-group-item item-2 w-100 p-3">78965421M</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Email Id </li>
              <li class="list-group-item item-2 w-100 p-3">Student@gmail.com</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Mobile No</li>
              <li class="list-group-item item-2 w-100 p-3">8293064197</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Address</li>
              <li class="list-group-item item-2 w-100 p-3">Full address of student</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Academic year</li>
              <li class="list-group-item item-2 w-100 p-3">2021-22</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Semester</li>
              <li class="list-group-item item-2 w-100 p-3">5</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item item-1 w-100 p-3">Program</li>
              <li class="list-group-item item-2 w-100 p-3"> B.E. Computer Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
}
</script>

<style lang="scss">
  .item-1{
      width: 300px !important;
    }

    .item-2{
      width:  400px !important;
    }
</style>
