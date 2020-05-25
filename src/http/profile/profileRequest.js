import axios from "axios";
import {baseUrl} from "../configurations";

export const profileRequests = {
  getProfile(myId,userId){

  },
  watchUser(userId) {

  },
  updateProfile(user){
    let token = localStorage.getItem("token");
    axios.post(baseUrl.base+"api/v1/experience",
      user.experiences,
      {
        headers :{
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        }
      })
   return axios.post(baseUrl.base+"api/v1/user/updateUser",
      user,
      {
        headers :{
          'Content-Type': 'application/json',
          'Authorization': token.toString(),
          "Access-Control-Allow-Origin": "*"
        }
      })
  }

}
