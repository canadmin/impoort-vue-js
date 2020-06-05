<template>
  <div class="message-row h-100 pl-5 pr-5">
    <div class="container-fluid  pl-5 pr-5 ">
      <div class="col-12 message-component mt-5">
        <div class="row">
          <div class="col-3  bg-white message-general">
            <div class="mt-5 text-center">
              <span class="">Messages</span>
              <hr>
              <div class="text-center  mt-2 mb-3-">
                <input type="text" placeholder="search watcher" class="search-watch-user ">
              </div>
            </div>
            <div class="general-user mt-3 ml-4">
              <div v-for="user in inbox">
                <div class="general-user-single mb-3" @click="selectUserForMessage(nameMerger(user.firstName,user.lastName),user.userId,user.profileImgUrl)">
                  <img :src="user.profileImgUrl !== null? user.profileImgUrl: ''" width="50" height="50"class="general-user-single-img">

                  <span class="ml-3 general-user-single-name" v-text="nameMerger(user.firstName,user.lastName)"></span>
                  <span class="ml-3 general-user-single-name l-message" v-text="lastMessage(user.lastMessage)"></span>

                </div>
              </div>


            </div>
          </div>
          <div class="col-9  bg-white message-box" v-if="user != null">
            <!-- Message Box header-->
            <div class="message-box-header mt-3 text-right mr-5">
              <img :src="user.imgUrl !== null? user.imgUrl: ''" width="50" height="50"class="general-user-single-img">
              <span class="mr-5 general-user-single-name">{{user.selectedUserName}}</span>
            </div>
            <hr>
            <!-- mesajlar -->
            <div class="messages-box ">
              <div v-for="message in messagesList">
                <!--- message to me -->
                <div class="mt-3 ml-3 other-user" v-show="message.value.byWho != 'me'">
                  <img class="general-user-single-img" src="../../assets/pp.jpeg" width="40" height="40">
                  <div class="message-from-other ">
                    <span class="ml-3 general-user-single-name">{{message.value.messagePayload}}</span>
                  </div>
                  <!--- message from me -->
                </div>
                <div class="user-me" v-if="message.value.byWho == 'me'">
                  <div class="message-from-me  mt-3  float-right">
                    <span class="mr-5 general-user-single-name">{{message.value.messagePayload}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- mesaj input alanı -->
            <div class="mt-3 ">
              <input type="text" v-model="messageText" @keydown.enter="sendMessage"
                     :class="!showButton ? 'message-input-text': 'message-input-with-button'"
                     placeholder="Write a message ...">
              <button class=" send-button ml-4" v-show="showButton" @click="sendMessage"> Gönder</button>
            </div>

          </div>
          <div class="col-9   bg-white message-box text-center " v-else>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import {messageRequests} from "../../http/messages/messageRequests";

  export default {
        data() {
            return {
                showButton: false,
                messageText: null,
                messagesList: [],
                user: null,
                inbox : [],
                receiverId : null,
                globalInterval : null,
                biseyler : 0
            }
        },
        methods: {

            selectUserForMessage(user,userId,profileImg) {
                clearInterval(this.globalInterval)
                this.messagesList = []
                this.receiverId = userId;
                let senderId = localStorage.getItem("userId");
                messageRequests.getSpesChat(senderId,this.receiverId).then(response=>{
                    response.data.forEach(data=>{
                        console.log(data)
                        if (data.messageSenderUserId === senderId){
                            this.messagesList.push({
                                key : data.messageId,
                                value : {
                                    byWho : "me",
                                    messagePayload : data.messageText
                                }
                            })
                        }else{
                            this.messagesList.push({
                                key : data.messageId,
                                value : {
                                    byWho : user,
                                    messagePayload : data.messageText
                                }
                            })
                        }
                    })
                })
                this.user = {
                    selectedUserId: userId,
                    selectedUserName: user,
                    imgUrl : profileImg
                }

               this.messageListener()
            },
            messageListener(){
              var vm = this;
                this.globalInterval = setInterval(()=>{
                 this.receiverId = this.user.selectedUserId;
                 let senderId = localStorage.getItem("userId");
                 messageRequests.getSpesChat(senderId,this.receiverId).then(response=>{
                     response.data.forEach(data=>{
                         var isNotExist = true
                         vm.messagesList.forEach(message=>{
                             if(data.messageId === message.key){
                                 isNotExist = false
                             }
                         })
                          if(isNotExist){
                              if (data.messageSenderUserId === senderId){
                                  this.messagesList.push({
                                      key : data.messageId,
                                      value : {
                                          byWho : "me",
                                          messagePayload : data.messageText
                                      }
                                  })
                              }else{
                                  this.messagesList.push({
                                      key : data.messageId,
                                      value : {
                                          byWho : vm.user.selectedUserName,
                                          messagePayload : data.messageText
                                      }
                                  })
                              }
                          }
                     })

                 })
              },5000)
            },
            sendMessage(event) {
                let senderId = localStorage.getItem("userId");
                messageRequests.sendMessage(this.receiverId,senderId,event.target.value).then(response => {
                    console.log(response.data)
                    this.messagesList.push({
                        key : response.data.messageId,
                        value : {
                            byWho : "me",
                            messagePayload : response.data.messageText
                        }
                    })
                } )
                this.messageText = "";
            },
            getInbox(){
                let userId = localStorage.getItem("userId");
                messageRequests.getInbox(userId).then(response => {
                    console.log(response.data)
                    this.inbox = response.data
                })
            },
            nameMerger(fName,lName){
                return fName + ' ' + lName;
            },
            lastMessage(lastMessage){
                return lastMessage.substring(0,10)
            }
        },
        created() {
            this.getInbox()
            this.$store.dispatch("activePPImage", true);
        },
        watch: {
            messageText(value) {
                this.showButton = !(value != null && value === "");
            },

        },

    }
</script>
<style scoped>
  .message-general {
    background-color: white;
    height: 700px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    transition: box-shadow 83ms;
    overflow-x: auto;

  }

  .message-box {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    transition: box-shadow 83ms;

  }
.l-message{
  opacity: 0.5;
}
  .message-row {
    margin-top: 4.5rem;
    margin-left: 150px;
    margin-right: 150px;

  }

  .general-user {
    overflow-y: auto;
    height: 500px;
    width: 250px;

  }

  .general-user-single:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .general-user-single-img {
    border-radius: 50%;
  }

  .general-user-single-name {
    font-size: 13px;
  }

  hr {
    width: 85%;
  }

  .messages-box {
    height: 500px;
    overflow-y: visible;
    overflow-x: hidden;
    background-color: #F5F5F5;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    transition: box-shadow 83ms;
    padding-bottom: 45px;
  }

  .message-from-other {
    width: 250px;
    display: inline-flex;
    background-color: #60C4A9;
    padding: 10px;
    color: white;
    border-radius: 0 10px 10px 10px;

  }

  .message-from-me {
    width: 250px;
    display: inline-flex;
    background-color: #283E4A;
    margin-right: 15px;
    padding: 10px;
    color: white;
    border-radius: 10px 0 10px 10px;
  }

  .message-input-text {
    width: 100%;
    border-radius: 5px;
    border: 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    background-color: #f5f5f5;
    height: 35px;
    padding-left: 10px;
  }

  .message-input-with-button {
    width: 85%;
    border-radius: 5px;
    border: 0;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    background-color: #f5f5f5;
    height: 35px;
    padding-left: 10px;
  }

  .send-button {
    background-color: #f5f5f5;
    border: 0;
    height: 35px;
    color: #283E4A;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }

  .send-button:hover {
    background-color: #283E4A;
    color: #f5f5f5;

  }

  .other-user {
    width: 700px;
    display: inline-block;
  }

  .user-me {
    width: 750px;
    float: right;
    display: inline-block;
  }

  .search-watch-user {
    border: 0;
    padding-left: 5px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }
</style>

