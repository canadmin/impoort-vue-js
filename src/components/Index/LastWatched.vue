<template>
  <div class=" last-watched-bg">
    <div class=" mt-5 mr text-center p-5">
      <h3 class="title-text">Last Watched</h3>
      <img src="../../assets/watched.png" height="30" width="30"/>

      <app-last-watched-single v-for="asd in 5"></app-last-watched-single>

    </div>
  </div>
</template>

<script>
    import LastWathedSingle from "./LastWatchedSingle";

    export default {
        data() {
            return {}
        },
        components: {
            appLastWatchedSingle: LastWathedSingle
        }
    }
</script>

<style scoped>

  .last-watched-bg {
    background-color: #FFFEFF;
    position: fixed;
    right: 0;
    top: 0;
    border-radius: 15px;
    height: 100%;


  }

  .title-text {
    color: #60C4A9;
  }

  hr {
    height: 1px;
    background-color: #ffffff;
    border: none;
  }

</style>
