<template>
  <div id="index" ref="index" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 mt-4">
          <app-messages-box></app-messages-box>
          <app-left-side :suggestedList="suggestedList"></app-left-side>
        </div>
        <div class="col-4 mt-4">
          <app-create-post></app-create-post>
          <div v-for="post in postList">
            <app-post  class="mt-5" :post="post"></app-post>
          </div>

        </div>
        <div class="col-4 mt-4 text-center">
          <app-right-side></app-right-side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Post from "../post/Post";
    import IndexRightSide from "./sideComponents/IndexRightSide";
    import IndexMessagesBox from "../common/chatBox/IndexMessagesBox";
    import IndexLeftSide from "./sideComponents/IndexLeftSide";
    import CreatePost from "../post/CreatePost";
    import {profileRequests} from "../../http/profile/profileRequest";
    import {indexRequest} from "../../http/indexRequests";

    export default {
        data() {
            return {
                postList: [],
                isIndex: true,
                suggestedList :[]

            }
        },
        methods: {
            paging(postList) {
                if (postList.length < 1) {
                    this.loadData(postList)
                }
                  window.onscroll = () => {

                      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight;
                      if (bottomOfWindow) {
                          this.loadData(postList);
                      }
                  }

            },
            loadData(postList) {
                for (let i = 0; i < 5; i++) {
                    postList.push("item" + i)
                }
            },
            scrollPage(event){
                let currentScrollHeight = document.documentElement.scrollTop;
                if(currentScrollHeight>170){
                    this.$store.dispatch("activePPImage",true);
                }else{
                    this.$store.dispatch("activePPImage",false)
                }
            }

        },
        mounted() {
            this.paging(this.postList);

        },

        components: {
            appPost: Post,
            appRightSide: IndexRightSide,
            appMessagesBox: IndexMessagesBox,
            appLeftSide: IndexLeftSide,
            appCreatePost: CreatePost
        },
        created() {
            indexRequest.getSuggested().then(response => {
                this.suggestedList = response.data;
                console.log(this.suggestedList)
            });
            indexRequest.getAllPosts(0,12,false,localStorage.getItem("userId"))
                .then(response=> {
                    console.log(response.data)
                    this.postList = response.data.content
                })
            this.$store.dispatch("activePPImage",false);
            window.addEventListener('scroll', this.scrollPage);
        },

        destroyed() {
            window.removeEventListener('scroll', this.scrollPage);

        }


    }
</script>

<style scoped>

</style>

