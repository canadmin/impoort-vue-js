import axios from "axios";
import {baseUrl} from "./configurations";

export const indexRequest = {
  shareNewPost(post){
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    post.userId = user.userId;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
         "Access-Control-Allow-Origin": "*"
    }
    console.log(token)
    axios.post(baseUrl.base+'api/v1/post', post,{
      headers: headers
    }).then(response => {
        console.log(response)
    })
      console.log("post shared",user)
  },
  getAllPosts(){

  },
  getAllMessagesFromUser(){

  },
  sendMessageToOtherUser(){

  },
  getSuggestedUser(){

  },
  likePost(){

  },
  unlikePost(){

  },
  watchPost(){

  },
  unWatchPost(){

  },
  addCommentToPost(){

  },

}
