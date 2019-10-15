<template>
  <div>
    <app-header></app-header>
    <div class="row">
    <div :class="!isCollapse ? 'col-2' : 'col-1' ">
      <app-side-bar @collapse="isCollapse = $event"></app-side-bar>
    </div>
      <div :class="!isCollapse ? 'col-10' : 'col-11' ">
        <router-view :isCollapse="isCollapse"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "../common/AppHeader";
    import Post from "../post/Post";
    import LastWatched from "./LastWatched";
    import SideBar from "./Sidebar";

    export default {
        data() {
            return {
                isCollapse : false
            }
        },
        components: {
            appPost: Post,
            appLastWatched: LastWatched,
            appHeader: Header,
            appSideBar: SideBar
        },


    }
</script>

<style scoped>

</style>
