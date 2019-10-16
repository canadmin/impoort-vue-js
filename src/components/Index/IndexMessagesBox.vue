<template>
  <div>
    <div class=" card-body mt-5" :class="!isCollapseMessages ? 'right-side' : 'new-side-open'">
      <div class="text-center message-toggle" @click="isCollapseMessages = !isCollapseMessages">
        <span>Messages</span>
      </div>
      <hr>
      <div class="box-users">
        <div class="box-user-single ">
          <div class="p-2">
            <img src="../../assets/stonks.jpg" class="index-message-box-image ml-3" width="30" height="30">
            <span class="ml-2 ">Yusuf Ali Ezik</span>
          </div>
        </div>

      </div>
    </div>
      <app-single-chat></app-single-chat>
  </div>

</template>

<script>
  import IndexSingleChatBox from "./IndexSingleChatBox";
    export default {
        data() {
            return {
                isCollapseMessages: false
            }
        },
        components:  {
            appSingleChat:IndexSingleChatBox
        }
    }
</script>

<style scoped>
  .right-side {
    position: fixed;
    bottom: 0;
    position: -webkit-sticky;
    width: 375px;
    height: 50px;
    float: left;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 1;
  }

  .left-image {
    border-radius: 50%;
  }

  .new-side-open {
    position: fixed;
    bottom: 0;
    position: -webkit-sticky;
    width: 375px;
    height: 600px;
    float: left;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 1;
    cursor: pointer;
  }

  .box-users {
    height: 500px;
    overflow-y: auto;

  }

  .index-message-box-image {
    border-radius: 50%;
  }

  .box-user-single :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .message-toggle {
    cursor: pointer;
  }


</style>
