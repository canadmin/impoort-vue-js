<template>
  <div class="container w-50 ">
    <div class="row">
      <div class="col">
        <input type="text" class="form-control form-control-lg"
               placeholder="E-Mail">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <input type="password" class="form-control form-control-lg"
               placeholder="Password">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <router-link to="/index" tag="button" class="form-control btn btn-color">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                navigationLink: {name: "index"}
            }
        }
    }
</script>

<style scoped>
  .btn-color {
    background-color: #60C4A9;
    color: #ffffff;
  }

  .back {
    background: #F8F1FA;
    background-color: #F8F1FA;
    height: 100%;
  }

  .btn-color {
    background-color: #60C4A9;
    color: #ffffff;
  }

  .element-p-color {
    color: #60C4A9;
  }

  .element-p-color-opacity {
    opacity: 0.5;
  }

  .element-p:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .image {
    opacity: 0.5;
  }

</style>
