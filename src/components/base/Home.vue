<template>
  <div>
    <app-header></app-header>
    <div class="">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import Header from "../common/AppHeader";
    import Post from "../post/Post";

    export default {
        data() {
            return {}
        },
        components: {
            appPost: Post,
            appHeader: Header,
        },


    }
</script>

<style scoped>

</style>
