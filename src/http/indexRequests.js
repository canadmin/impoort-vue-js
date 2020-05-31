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
  getAllPosts(pageNumber,pageSize,profilePost,userId){
    let token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    return axios.get(baseUrl.base+"api/v1/post",
      {
        params: {
          pageNumber : pageNumber,
          pageSize : pageSize,
          userId : userId,
          profilePost: profilePost,
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        },
      })

  },
  getAllMessagesFromUser(){

  },
  sendMessageToOtherUser(){

  },
  getSuggestedUser(){

  },
  likePost(postId){
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    return axios.post(baseUrl.base+'api/v1/post/'+postId+"/addNewLike", {
      'user' : localStorage.getItem("userId")
    },{
      headers: headers
    })
  },
  unlikePost(postId){
    let user = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    const data = {
        "user" : localStorage.getItem("userId")
    }
    /*

     headers: {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      }
      */
    return axios.post(baseUrl.base +"api/v1/post/deleteLikeWeb",{}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params: {
        "userId" : user,
        "postId": postId
      }
    });


  },
  watchPost(postId){
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    return axios.post(baseUrl.base+'api/v1/post/'+postId+"/watch",{},{
      headers: headers,
      params : {
        userId : userId,
        postId : postId
      }
    })

  },
  unWatchPost(postId){
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    axios.post(baseUrl.base+'api/v1/post/'+postId+"/unWatchPost",{},{
      headers :headers,
      params: {
        postId : postId,
        userId : userId
      }
    })

  },
  deleteComment(commentId,postId){
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    return axios.post(baseUrl.base+'api/v1/post/'+postId+"/deleteComment", {
      'commentId' : commentId,
    },{
      headers: headers
    })
  },
  addCommentToPost(postId,commentContent){
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    console.log(token,commentContent)
   return axios.post(baseUrl.base+'api/v1/post/'+postId+"/addComment", {
      'commentText' : commentContent,
      'user' : localStorage.getItem("userId")
    },{
      headers: headers
    })
  },
  getSuggested() {
    let token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    return axios.get(baseUrl.base+"api/v1/discover/suggested",
      {
        params: {
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        },
      })
  }
}
