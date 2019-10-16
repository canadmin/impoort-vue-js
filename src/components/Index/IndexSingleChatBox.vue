<template>
  <div class="" :class="!chatStatus ? 'singleChat-closed' : 'singleChat'"  >
    <div class="text-center mt-5 box-user-name">
      <span class="" @click="chatStatus=!chatStatus">{{messageBox.isim}}</span>
      <button type="button" class="close mr-2" aria-label="Close">
      <span aria-hidden="true" @click="closeThisBox">&times;</span>
    </button>
      <hr>
    </div>
    <div class="chat-area-index-box mt-n3 ml-1 mr-1">
      <div class="message-index-from">
        <div class="message-from-other">
        Merhaba, nasılsın?
        </div>
      </div>
      <div class="message-index-me  ">
        <div class="message-me  float-right">
          <div>
            teşekkürler
          </div>
        </div>
      </div>
      <div class="message-index-from">
        <div>
            asdasd
        </div>
      </div>
      <div class="message-index-me  ">
        <div class="message-me  float-right">
          <div>
            asdasd
          </div>
        </div>
      </div>


    </div>
    <div class="chat-box-index-input-area">
      <input type="tex" class="chat-index-input">
      <button class="sen-button-index">-></button>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                chatStatus : true
            }
        },
        methods : {
            closeThisBox(){
                console.log()
                this.$store.dispatch("deleteMessageBox",this.messageBox.isim);
            }
        },
        props: ["messageBox"]
    }
</script>

<style scoped>

  .singleChat {
    background-color: white;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    width: 350px;
    height: 400px;
  }
  .singleChat-closed {
    background-color: white;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    width: 350px;
    height: 40px;

  }

  .box-user-name {

  }

  .chat-area-index-box {
    height: 300px;
    background-color: #f5f5f5;
    overflow-y: auto;
    overflow-x: hidden ;

  }

  .chat-index-input {
    width: 85%;
    margin-top: 20px;
    margin-left: 8px;
    border-radius: 5px;
    border: 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }

  .sen-button-index {
    background-color: #f5f5f5;
    border: 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    margin-left: 5px;
  }

  .message-index-from {
    width: 180px;
    display: flex;
    padding: 8px 8px 8px 7px;
    color: white;
    border-radius: 0px 10px 10px 10px;
    background-color: #60C4A9;
    font-size: 13px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 8px;
  }

  .message-index-me {
    width: 340px;
    display: inline-block;
  }

  .message-me {
    float: right;
    display: inline-block;
    margin-left: 35px;
    padding: 8px 8px 8px 7px;
    color: white;
    border-radius: 10px 0 10px 10px;
    background-color: #283E4A;
    font-size: 13px;
    width: 180px;
    margin-right: 18px;
  }

  .message-from-other{
    width: 180px;
    padding: 10px;
  }
</style>
