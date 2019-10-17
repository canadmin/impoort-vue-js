<template>
  <div>
    <div class=" card-body mt-5" :class="!isCollapseMessages ? 'right-side' : 'new-side-open'">
      <div class="text-center message-toggle" @click="isCollapseMessages = !isCollapseMessages">
        <span>Messages</span>
      </div>
      <hr>
      <div class="box-users">
        <div class="box-user-single" @click="openNewMessageBox('Yusuf Ali Cezik')">
          <div class="p-2">
            <img src="../../../assets/stonks.jpg" class="index-message-box-image ml-3" width="30" height="30">
            <span class="ml-2 ">Yusuf Ali Cezik</span>
          </div>
        </div>
        <div class="box-user-single" @click="openNewMessageBox('Can Yardımcı')">
          <div class="p-2">
            <img src="../../../assets/stonks.jpg" class="index-message-box-image ml-3" width="30" height="30">
            <span class="ml-2 ">Can yardımcı</span>
          </div>
        </div>
        <div class="box-user-single" @click="openNewMessageBox('Hasan Cerit')">
          <div class="p-2">
            <img src="../../../assets/stonks.jpg" class="index-message-box-image ml-3" width="30" height="30">
            <span class="ml-2 ">Hasan Cerit</span>
          </div>
        </div>
        <div class="box-user-single" @click="openNewMessageBox('Mehmet Burak')">
          <div class="p-2">
            <img src="../../../assets/stonks.jpg" class="index-message-box-image ml-3" width="30" height="30">
            <span class="ml-2 ">Mehmet Burak</span>
          </div>
        </div>

      </div>
    </div>
    <!--messageBox-->
    <div v-for="(messageBox,index) in messageBoxList">
      <div v-if="index === 0">
      <div class="chatfalan" :style="{left:(index+1)*left+'px'}">
        <app-single-chat v-if="messageBoxCount != 0" :messageBox="messageBox" :index="index"></app-single-chat>
      </div>
      </div>
      <div v-else>
        <div class="chatfalan" :style="{left:(index+1)*360+'px'}">
          <app-single-chat v-if="messageBoxCount != 0" :messageBox="messageBox" :index="index"></app-single-chat>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import IndexSingleChatBox from "./IndexSingleChatBox";
    export default {
        data() {
            return {
                isCollapseMessages: false,
                left :350,
                messageBoxCount : 0,
                messageBoxList : []
            }
        },
        components:  {
            appSingleChat:IndexSingleChatBox
        },
        methods : {
            openNewMessageBox(value){
               let messageBox = {isim : value};
                let lengthOfList= this.getMessageBoxList;
                this.$store.dispatch("addNewMessageBox",messageBox);
                this.messageBoxCount=this.getMessageBoxList.length;
                this.messageBoxList = this.getMessageBoxList;


            },

        },
        computed : {
            getMessageBoxList(){
                return this.$store.getters.getMessageBox;
            }
        }
    }
</script>

<style scoped>
  .right-side {
    position: fixed;
    bottom: 0;
    position: -webkit-sticky;
    width: 300px;
    height: 50px;
    float: left;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 100;
    transition: height 500ms ease-in-out;

  }

  .left-image {
    border-radius: 50%;
  }

  .new-side-open {
    position: fixed;
    bottom: 0;
    position: -webkit-sticky;
    width: 300px;
    height: 600px;
    float: left;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 100;
    cursor: pointer;
    transition: height 500ms ease-in-out;


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
.chatfalan{
  position: fixed;
  z-index: 100;
  bottom: 0;



}

</style>
