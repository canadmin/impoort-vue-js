import axios from "axios";
import {baseUrl} from "../configurations";

export const profileRequests = {
  getProfile(userId){
    let token = localStorage.getItem("token");
    let myId = localStorage.getItem("userId");
    return axios.get(baseUrl.base+"api/v1/user/profile/"+userId,{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params : {
        'userId' : userId,
        'myId' : myId
      }
    })
  },
  watchUser(userId) {

  },
  updateProfile(user){
    let token = localStorage.getItem("token");
     axios.post(baseUrl.base+"api/v1/experience",user.experiences,
      { headers :{
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      }}).then(response => {
            return axios.post(baseUrl.base+"api/v1/user/updateUser",
            user,
            {
              headers :{
                'Content-Type': 'application/json',
                'Authorization': token.toString(),
                "Access-Control-Allow-Origin": "*"
              }
            })
    }).then(response => {
       localStorage.setItem("user",JSON.stringify(response.data))
     })

  },
  getWatcher(myId,pageNumber,pageSize,userId){
    let token = localStorage.getItem("token");
      return axios.get(baseUrl.base+"api/v1/watch/watcher/"+userId,{
        headers : {
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        },
        params : {
          'myId' : myId,
          'pageNumber' : pageNumber,
          'pageSize' : pageSize,
          'userId' : userId,
        }
    })
  },
  getWatching(myId,pageNumber,pageSize,userId){
    let token = localStorage.getItem("token");
    return axios.get(baseUrl.base+"api/v1/watch/watching/"+userId,{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params : {
        'myId' : myId,
        'pageNumber' : pageNumber,
        'pageSize' : pageSize,
        'userId' : userId,
      }
    })
  },
  updateProfileImage(profileImg){
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId")
    return axios.post(baseUrl.base+"api/v1/user/updateProfileImg",{
    },{
      headers :{
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params :{
        'userId':userId,
        "url": profileImg,
      }
    })
  }

}
