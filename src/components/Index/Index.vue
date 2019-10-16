<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 mt-5">
          <app-messages-box></app-messages-box>
        </div>
        <div class="col-4 mt-5">
          <div class="share-new-post text-center mt-5 bg-white ">
            <img src="../../assets/share.png">
            <hr>
            <div class="mb-3">
            Yeni Gönderi Paylaş
            </div>
            <hr>
            </div>
          <app-post v-for="a in 8" class="mt-5"></app-post>
        </div>
        <div class="col-4 mt-5 text-center ">
          <app-left-side ></app-left-side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Post from "../post/Post";
    import IndexLeftSide from "./IndexRightSide";
    import IndexMessagesBox from "./IndexMessagesBox";
    export default {

        components: {
            appPost: Post,
            appLeftSide:IndexLeftSide,
            appMessagesBox: IndexMessagesBox
        },


    }
</script>

<style scoped>
.share-new-post{
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  transition: box-shadow 83ms;
  cursor: pointer;
}
  .share-new-post:hover{
    box-shadow: 0 0 0 1px #0b2e13, 0 2px 3px rgba(0, 0, 0, .2);
  }

</style>

