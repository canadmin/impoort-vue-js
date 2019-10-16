<template>
  <div class="singleChat">
    <div class="text-center mt-3 box-user-name">
      <span class="">Can Yardımcı</span>
      <hr>
    </div>
    <div class="chat-area-index-box  mt-n3 ml-1 mr-1">
      <div class="message-index-from">
        <div class="message-from-other">
          asdasdadasdasdasd asd asd asd asd asd asdasdasdaasdads
        </div>
      </div>
      <div class="message-index-me  ">
        <div class="message-me  float-right">
          <div>
            asdasdadasdasdasd a
          </div>
        </div>
      </div>
      <div class="message-index-from">
        <div>
          asdasdadasdasdasd asd asd asd asd asd asdasdasdaasdads
        </div>
      </div>
      <div class="message-index-me  ">
        <div class="message-me  float-right">
          <div>
            asdasdadasdasdasd asd asd asd asd asd asdasdasdaasdads
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
    }
</script>

<style scoped>

  .singleChat {
    position: fixed;
    bottom: 0;
    left: 400px;
    z-index: 100;
    background-color: white;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    width: 350px;
    height: 400px;

  }

  .box-user-name {
  }

  .chat-area-index-box {
    height: 280px;
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
