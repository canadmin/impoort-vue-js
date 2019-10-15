<template>
  <div class="row message-row mt-5">
    <div class=" h-100 mt-5 message-box " :class="!isCollapse ? 'col-7' : 'col-9' ">
      <div class="message-top-bar">
        <div class="text-center pt-2">
          <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
          <h3><p class="general-name mt-3">Barancan Yardımcı</p></h3>
        </div>
      </div>
      <div class="message-messages-inline">
        <div v-for="message in messagesList">
          <div v-show="message.value.byWho != 'me'" >
          <div class="d-inline-block ml-4 mt-4">
            <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
          </div>
          <div class="message-data d-inline-block">
            <div class="message-payload-receive">{{message.value.messagePayload}}</div>
          </div>
        </div>
        <div class="message-message-me mb-2" v-if="message.value.byWho == 'me'">
          <span class="message-payload-me mr-4">{{message.value.messagePayload}}</span>
        </div>
        </div>

      </div>
      <div class=" message-messages-input">
        <input type="text" placeholder="Mesajını gir" :class="showButton? 'message-input-withButton' : 'message-input'"
               v-model="messageText" @keydown.enter="sendMessage">
        <button v-show="showButton" class="message-send-button">Gonder</button>
      </div>
    </div>

    <div class="col-2  message-general">
      <div class="">
        <div class="text-center mt-4">
          <span class="general-name"> <h4>Messages</h4></span>
        </div>
        <hr>
        <div class="d-flex justify-content-center ">
          <input type="text" placeholder="Search" class="general-search"/>
        </div>
        <hr>
        <div class="mt-4">
          <div class="p-1 single-general mt-2">
            <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
            <span class="general-name">Barancan yardımcı</span>
          </div>

          <div class="p-1 single-general mt-2">
            <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
            <span class="general-name">Yusuf Ali Çezik</span>
          </div>

          <div class="p-1 single-general mt-2">
            <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
            <span class="general-name">Hasan Cerit</span>
          </div>
          <div class="p-1 single-general mt-2">
            <img src="../../assets/pp.jpeg" height="50" width="50" class="general-image">
            <span class="general-name"> Burak Hammuşoğlu</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        data() {
            return {
                showButton: false,
                messageText: null,
                messagesList : [
              ]
            }
        },
        props : {
            isCollapse : {
                type : Boolean,
                default : false
            }
        },
        methods : {
          initialMessage(){
              this.messagesList.push({key :1 , value : {byWho: "yusuf",messagePayload : "Merhaba Can Nasılsın"}});
              this.messagesList.push({key :2 , value : {byWho: "me",messagePayload : "Merhaba, Teşekkürler sen nasılsın"}});
              var container = this.$el.querySelector(".message-messages-inline");
              container.scrollTop = container.scrollHeight;
          },
            sendMessage(event){
              let lastIndex=this.messagesList.length;
              let key=this.messagesList[lastIndex-1].key;
                this.messagesList.push({key :key, value : {byWho: "me",messagePayload : event.target.value}});
                this.messagesList.push({key :key+1 , value : {byWho: "yusuf",messagePayload : "Merhaba Can Nasılsın"}});
                this.messageText="";
                var container = this.$el.querySelector(".message-messages-inline");
                container.scrollTop = container.scrollHeight;

            },

        },
        created(){
            this.initialMessage();
        },
        watch: {
            messageText(value) {
                if (value != null && value === "") {
                    this.showButton = false;

                } else {
                    this.showButton = true;
                }
            },
        }
    }
</script>
<style scoped>
  .message-row {
    height: 95vh;
  }

  .message-general {
    overflow-y: auto;
    position: fixed;
    height: 95vh;
    right: 0;
    background-color: #60C4A9;
  }

  .message-box {
    height: 95%;
    position: fixed;
    background-color: #ffffff;
  }

  .general-name {
    color: white;
  }

  .general-image {
    border-radius: 50px;
  }

  .general-search {
    border-radius: 10px;
    border-color: #60C4A9;
    border: 0;
    width: 175px;
    padding-left: 15px;
    height: 35px;
  }

  .single-general {
    border-radius: 5px;
  }

  .single-general:hover {
    background-color: #246590;
    cursor: pointer;
  }

  .message-top-bar {
    width: 100%;
    height: 15%;
    background-color: #60C4A9;
  }

  .message-messages-inline {
    height: 55%;
    margin-top: 15px;
    background-color: #F8F1FA;
    overflow-y: scroll;
  }

  .message-messages-input {
    height: 10%;
    margin-top: 15px;
    background-color: #246590;
    opacity: 0.5;
  }

  .message-input {
    width: 95%;
    position: absolute;
    margin-top: 15px;
    margin-left: 15px;
    height: 50px;
    border-radius: 10px;
    border: 0;
    padding-left: 10px;
  }

  .message-input-withButton {
    width: 85%;
    margin-top: 15px;
    margin-left: 15px;
    height: 50px;
    border-radius: 10px;
    border: 0;
    padding-left: 10px;
  }

  .message-send-button {
    margin-left: 35px;
    height: 50px;
    border-radius: 15px;
    border: 0;
  }

  .message-payload-receive {
    width: 250px;
    background-color: #60C4A9;
    height: auto;
    min-height: 40px;
    padding: 15px;
    border-radius: 10px;
    margin-left: 15px;
    color: white;
  }

  .message-payload-me {
    display: contents;

  }

  .message-message-me {
    width: 300px;
    margin-left: auto;
    margin-right: 0;
    background-color: #246590;
    padding: 10px;
    color: white;
    min-height: 60px;

    border-radius: 15px 0 15px 15px;


  }
</style>

