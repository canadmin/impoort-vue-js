import axios from "axios";
import {baseUrl} from "../configurations";
import base from "ant-design-vue/lib/base";

export const messageRequests = {
  sendMessage(receiverId,senderId,messageBody){
    let data = {
      "messageReceiverUserId": receiverId,
      "messageSenderUserId": senderId,
      "messageText" : messageBody
    }
    let token = localStorage.getItem("token");
    return axios.post(baseUrl.base+"api/v1/messages/sendMessage",data,
      { headers :{
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        }})
  },
  getInbox(userId){
    let token = localStorage.getItem("token");

    return axios.get(baseUrl.base+ "api/v1/messages/inbox/"+userId,{
      headers :{
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      }
    })
  },
  getSpesChat(senderId,receiverId){
    let token = localStorage.getItem("token");

    return axios.get(baseUrl.base+ "api/v1/messages/allMessage/"+senderId+"/"+receiverId,{
      headers :{
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params : {
        'receiverId' : receiverId,
        'senderId' : senderId
      }
    })
  }
}
