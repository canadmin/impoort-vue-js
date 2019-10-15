<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 mt-5">
          <app-post v-for="a in 8" class="mt-4"></app-post>
        </div>
        <div class="col-3 last-watched-design">
          <app-last-watched></app-last-watched>
        </div>
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
            return {}
        },
        components: {
            appPost: Post,
            appLastWatched: LastWatched,
            appHeader: Header,
            appSideBar: SideBar
        },


    }
</script>

<style>


</style>

