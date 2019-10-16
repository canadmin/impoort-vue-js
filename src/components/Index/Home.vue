<template>
  <div>
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "../common/AppHeader";
    import Post from "../post/Post";

    export default {
        data() {
            return {
                isCollapse : false
            }
        },
        components: {
            appPost: Post,
            appHeader: Header,
        },


    }
</script>

<style scoped>

</style>
