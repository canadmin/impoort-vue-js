<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 mt-5">
          <app-messages-box></app-messages-box>
          <app-left-side></app-left-side>
        </div>
        <div class="col-4 mt-5">
          <app-create-post></app-create-post>
          <div >
          <app-post v-for="a in postList" class="mt-5"></app-post>
          </div>

        </div>
        <div class="col-4 mt-5 text-center" >
          <app-right-side ></app-right-side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Post from "../post/Post";
    import IndexRightSide from "./sideComponents/IndexRightSide";
    import IndexMessagesBox from "./chatBox/IndexMessagesBox";
    import IndexLeftSide from "./sideComponents/IndexLeftSide";
    import CreatePost from "../post/CreatePost";
    export default {
        data(){
            return{
              postList :[],
              bottom : true
            }
        },
        methods : {
          paging(postList){
                  if(postList.length < 1) {
                      this.loadData(postList)
                  }
                  window.onscroll = () => {
                  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight;
                  if(bottomOfWindow ){
                     this.loadData(postList);
                  }
              }
          },
          loadData(postList){
              for(let i = 0; i < 5;i++){
                  postList.push("item" + i)
              }

          }

        },
        mounted() {
            this.paging(this.postList);

        },
        components: {
            appPost: Post,
            appRightSide:IndexRightSide,
            appMessagesBox: IndexMessagesBox,
            appLeftSide :IndexLeftSide,
            appCreatePost :CreatePost
        },



    }
</script>

<style scoped>

</style>

