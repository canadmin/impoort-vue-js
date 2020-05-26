<template>
  <div class="p-1 mt-2 mb-2" v-show="deleted">
    <button v-if="isMyComment" class="float-right content-button" @click="deleteComment(comment.commentId)">X</button>

    <img src="../../assets/pp.jpeg" width="25" height="25"   class="comment-user-image">
    <span class="comment-user-name font-weight-bold">{{comment.user.fullName}}</span>
    <div class="mt-1 text-center">
      {{comment.commentText}}
    </div>
  </div>

</template>

<script>
   import {indexRequest} from "../../http/indexRequests";

   export default {
        data(){
            return {
                isMyComment : false,
                deleted : true
            }
        },
        methods : {
            deleteComment(commentId){

                indexRequest.deleteComment(commentId,this.postId).then(response=>{
                    this.deleted = false
                })
            }

        },
        props:["comment","postId"],
        created() {
          if(this.comment.user.userId === localStorage.getItem("userId")){
              this.isMyComment = true;
          }
        }
    }
</script>

<style scoped>
.comment-user-image{
  border-radius: 50%;
}
  .comment-user-name{
    font-size: 12px;
    cursor: pointer;
  }
  .content-button{
    border: 0;
    font-size: 10px;
    color: white;
    background-color: red;
  }
</style>
