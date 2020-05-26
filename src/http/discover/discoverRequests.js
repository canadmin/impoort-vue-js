import axios from "axios";
import {baseUrl} from "../configurations";

export const discoverRequests = {

  getSuggested(){
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
  },
  watchUser(userId){
    let token = localStorage.getItem("token");

    return  axios.post(baseUrl.base+'api/v1/watch', {},{
      headers : {
        'Content-Type': 'application/json',
        'Authorization' : token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params : {
        watcherId :JSON.parse(localStorage.getItem("user")).userId,
        watchingId :  userId
      }
    })
  },
  searchUser(fullName){
    let token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token.toString(),
      "Access-Control-Allow-Origin": "*"
    }
    const searchRequest = {
      "fullName": fullName,
      "userTypes": [
        "INVESTOR","DEVELOPER","STARTUP","NORMAL_USER",
      ]
    }
    return axios.post(baseUrl.base+"api/v1/search",
      searchRequest,{headers:headers})
  }
}
