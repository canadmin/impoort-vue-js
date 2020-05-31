<template>
  <div>
    <div class="card-background">
      <div id="myModal" class="modal-md" v-show="!profileSetting">

        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="profileSetting=!profileSetting">&times;</span>
          <div class="text-center">
            <span>Update Profile</span>
          </div>
          <div>
            <hr>
          </div>
          <div class="profile-update text-center mt-5">
            <div class="mt-5">
              <img src="../../assets/logo.png" width="80" height="80">
              <p>
                <button class="watch-button mt-2">change</button>
              </p>
            </div>
            <div>
              <label>First name</label>
              <input v-model="user.firstName"></input>
            </div>
            <div class="mt-1">
              <label>Last name</label>
              <input v-model="user.lastName"></input>
            </div>
            <div class="mt-1">
              <label>Location</label>
              <input v-model="user.city"></input>
            </div>
            <div class="mt-1">
              <label>Description</label>
              <input v-model="user.description"></input>
            </div>
            <div>
              <hr class="w-75">

              <label>Experiences</label>

              <div class="table-div">
                <table class="table">
                  <thead>
                  <th>Company Name</th>
                  <th>Role</th>
                  <th>Still Work ?</th>
                  </thead>
                  <tbody>
                  <tr scope="row" v-for="index in this.user.experiences">
                    <td>{{index.companyName}}</td>
                    <td>{{index.department}}</td>
                    <td>{{index.stillWork}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="">
                Company Name<input v-model="companyName"/>
                Role : <input v-model="department">
                Still work? <input type="checkbox" v-model="stillWork"></input>
              </div>
              <button @click="addExperience()" class="watch-button mt-3">Add Experiences</button>
            </div>

            <div>
              <hr class="w-75">
              <label>Links</label>
              <div class="table-div">
                <table class="table">
                  <thead>
                  <th>Website</th>
                  <th>Link</th>
                  </thead>
                  <tbody>
                  <tr scope="row" v-for="(value,name) in this.user.links">
                    <td>{{name}}</td>

                    <td>{{value}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="">
                <select v-model="linkName">
                  <option disabled value="" selected>Select Link</option>
                  <option style="background-image: url('../../assets/links/github.png')">Github</option>
                  <option>twitter</option>
                  <option>facebook</option>
                </select>
                Link <input v-model="link">
              </div>
              <button @click="addLink()" class="watch-button mt-3">Add Link</button>

            </div>
            <button @click="updateUser()" class="watch-button mt-3">Update</button>
          </div>
        </div>

      </div>


      <div id="messageModal" class="modal-md-message" v-show="!messageModalStatus">

        <!-- Modal content -->
        <div class="modal-content-message">
          <span class="close" @click="messageModalStatus=!messageModalStatus">&times;</span>
          <div class="text-center">
            <span>Send Message to {{user.fullName}}</span>
          </div>
          <div>
            <hr>
            <div>
              <div class="text-center">
                <input class="message-input" v-model="messageBody"/>
              </div>
              <div class="text-center mt-5">
                <button class="btn btn-secondary" @click="sendMessage()">Send Message</button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="inner-card container-fluid">
      <div class="row ">
        <div class="col-3 pt-5">
          <div class="left-card pt-4 ">

            <div class="block">
              <div class="text-center"><span>Experience</span></div>
              <el-divider><i class="el-icon-star-on"></i></el-divider>
              <el-timeline :reverse="reverse" class="ml-n3">
                <el-timeline-item
                  v-for="(activity, index) in this.user.experiences"
                  :key="index"
                  :color="activity.stillWork ? '#7eff55':''"
                  class="deneme"
                  :timestamp="activity.department">
                  {{activity.companyName}}
                </el-timeline-item>
              </el-timeline>
              <div class="text-center"><span>Links</span></div>
              <el-divider><i class="el-icon-star-on"></i></el-divider>
              <div class="link-div" v-for="(value,name) in this.user.links">
                <div class="link-item">
                  <img :src="getImageUrl(name)" class="link-icon">
                  <span>{{value}}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="center-card pt-4  col-8">
          <div class="">
            <div class="img-div">
              <img class="pp-img" src="../../assets/pp.jpeg">
              <div class="text-center bio">
                <button class="mt-1 btn watch-button" v-show="!myProfile">Watch +</button>
                <div class="text-center">
                  <p class="user-name">{{user.fullName}}
                    <img class="settings-button" @click="profileSetting=!profileSetting"
                         v-show="myProfile">
                    </img>
                  </p>
                  <p>@{{user.department}}</p>
                </div>

              </div>
            </div>

            <div class="row   mt-5 d-flex justify-content-center text-center">
              <div :class="activeTab === 'about'? 'active-tab':'watch-select'"
                   @click="selectedTabs('about')">
                About
              </div>
              <div :class="activeTab === 'posts'? 'active-tab':'watch-select'"
                   @click="selectedTabs('posts')">
                Posts (12)
              </div>
              <div :class="activeTab === 'watcher'? 'active-tab':'watch-select'"
                   @click="selectedTabs('watcher')">
                Watcher (256)
              </div>
              <div :class="activeTab === 'watching'? 'active-tab':'watch-select'"
                   @click="selectedTabs('watching')">
                Watching (195)
              </div>
            </div>

          </div>
          <div class="text-center">
            <hr class="common-hr">
          </div>

          <div class="show-post text-center">
            <div class="spinner-border spinner-color" role="status" v-if="loadingActive">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <div class="text-center   d-flex justify-content-center" v-if="showTab == 'about'">
            <div class="user-description ">
              <p class="desc"> {{user.description}} </p>
            </div>
          </div>

          <div class="show-post" v-if="showTab == 'posts'">
            <div class="" v-for="post in profilePost">
              <app-post :post="post" class="mt-5"></app-post>
            </div>
          </div>
          <div class="show-post" v-if="showTab == 'watcher'">
            <div class="" v-for="watch in watcher">
              <app-user :useByComponent="'profile'" :user="watch.user" ></app-user>
            </div>
          </div>
          <div class="show-post" v-if="showTab == 'watching'">
            <div class="" v-for="watch in watching">
              <app-user :useByComponent="'profile'" :user="watch.user" ></app-user>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

    import Post from "../post/Post";
    import User from "../common/User";
    import {profileRequests} from "../../http/profile/profileRequest"
    import {indexRequest} from "../../http/indexRequests";
    import {messageRequests} from "../../http/messages/messageRequests";

    export default {
        name: 'UserProfile',
        data() {
            return {
                // activities: [{
                //     content: 'Java Developer at Özgür Yazilim A.Ş.',
                // }, {
                //     content: 'Full Stack Developer at Impoort',
                // }, {
                //     content: 'Co - Founder Impoort',
                //     color: '#0bbd87'
                // }],
                reverse: true,
                loadingActive: false,
                showTab: "about",
                experiences: [],
                experiencesUpdateSize: 0,
                companyName: null,
                department: null,
                stillWork: false,
                user: null,
                linkName : "Github",
                link : null,
                profileSetting :true,
                profilePost : [],
                watcher : [],
                watching : [],
                messageModalStatus : false,
                messageBody : "Hey. !"
            }
        },
        methods: {
            selectedTabs(value) {
                this.activeTab = value;
                this.showTab = "";
                switch (value) {
                    case "posts":
                        indexRequest.getAllPosts(0,12,true,this.user.userId).then(response=>{
                            this.profilePost = response.data.content;
                        })
                        break;
                    case "watcher":
                        profileRequests.getWatcher(localStorage.getItem("userId"),
                        0,12,localStorage.getItem("visUserId")).then(
                            response => {
                                console.log(response)
                                this.watcher = response.data.content;
                            }
                        )
                        break;
                    case "watching" :
                        profileRequests.getWatching(localStorage.getItem("userId"),
                            0,12,localStorage.getItem("visUserId")).then(
                            response => {
                                console.log(response)
                                this.watching = response.data.content;
                            }
                        );
                        break;

                }
                setTimeout(() => {
                    this.loadingActive = false;
                    this.showTab = value;

                }, 2000);
                this.loadingActive = true;

            },
            scrollPage(event) {
                let currentScrollHeight = document.documentElement.scrollTop;
                if (currentScrollHeight > 120) {
                    this.$store.dispatch("changeHeaderBackground", true);
                } else {
                    this.$store.dispatch("changeHeaderBackground", false);
                }
            },
            addExperience() {
                this.user.experiences.push({
                    companyId: "",
                    companyName: this.companyName,
                    department: this.department,
                    stillWork: this.stillWork,
                    workerId: JSON.parse(localStorage.getItem("visUser")).userId
                })
                console.log(this.experiences)
                this.companyName = null,
                    this.department = null,
                    this.stillWork = false,
                    this.experiencesUpdateSize += 1;

            },
            addLink() {

                this.user.links = {
                    ...this.user.links,
                    [this.linkName] : this.link
                }
                this.linkName = "Github";
                this.link = null
            },
            updateUser() {
                profileRequests.updateProfile(this.user)
                this.profileSetting=!this.profileSetting
                // this.user =JSON.parse(localStorage.getItem("user"))
            },
            getImageUrl(image) {
                var images = require.context('../../assets/links', false, /\.png$/);
                return images('./' + image.toLowerCase() + '.png');
            },
            sendMessage(){
                let receiverId = localStorage.getItem("visUserId");
                let senderId = localStorage.getItem("userId");
                messageRequests.sendMessage(receiverId,senderId,this.messageBody)
                    .then(response => {
                        console.log("mesaj gönderildi")
                    })

            }

        },
        created(){

            this.user = JSON.parse(localStorage.getItem("visUser"));
            if(localStorage.getItem("userId") === localStorage.getItem("visUserId")){
                this.myProfile = true
            }
            console.log(this.user)
            this.activeTab = "about";
            this.$store.dispatch("activePPImage", true);
            this.$store.dispatch("changeHeaderBackground", false);
            window.addEventListener('scroll', this.scrollPage);

        },
        destroyed() {
            this.$store.dispatch("changeHeaderBackground", true);
            window.removeEventListener('scroll', this.scrollPage);

        },
        props : ['myProfile'],

        components: {
            appPost: Post,
            appUser: User,

        },


    }
</script>

<style scoped>
  link-item{
    display: inline-block;
  }
  .link-div{
    margin-top: 20px;
    margin-left: 15px;
  }
  .link-icon{
    width: 30px;
    height: 30px;
  }
  .table-div {
    width: 80%;
    margin-right: auto;
    margin-left: auto;

  }

  .exp {
    width: 150px;
    font-size: 10px;
  }

  .card-background {
    width: 100%;
    height: 250px;
    background: linear-gradient(221deg, #3d4f75, #6988ca, #206c4c, #0e293a);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 54s ease infinite;
    -moz-animation: AnimationName 54s ease infinite;
    -o-animation: AnimationName 54s ease infinite;
    animation: AnimationName 54s ease infinite;
  }
  .bio{
    width: 500px;
    margin-left: -180px;
    margin-top: 15px;
  }
  .active-tab {
    padding: 12px;
    width: 150px;
    margin-left: 12px;
    color: #ffffff;
    background-color: #283e4a;
    cursor: pointer;
  }
.settings-button{
  background-image: url("../../assets/setting.png");
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
}

  .inner-card {
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;
    width: 90%;
    margin-bottom: 50px;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.75);
  }

  .pp-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: -110px;
  }

  .img-div {
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    border-radius: 50%;
    height: 150px;
  }

  .left-card {
    height: 650px;
    position: sticky;
    position: -webkit-sticky;
    z-index: 0;
    width: 300px;
    -webkit-box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
    -moz-box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
    box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
  }

  .center-card {
    margin-left: -140px;
  }

  .user-description {
    width: 60%;
    color: rgb(153, 153, 153);
  }

  .desc {
  }

  .block {
  }

  .common-hr {
    width: 70%;
  }

  .user-name {
    font-family: Roboto Slab, Times New Roman, serif;
    font-weight: 700;
    color: #3c4858;
    font-size: 24px;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
  }

  .watch-select {
    padding: 12px;
    width: 150px;
    margin-left: 12px;
    color: #283E4A;
    cursor: pointer;
  }

  .watch-select:hover {
    background-color: #f4f4f4;
    border: 1px;
  }

  .spinner-color {
    color: #283E4A;
  }

  .show-post {
    width: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .watch-button {
    border-radius: 5px;
  }

  .watch-button:hover {
    background-color: #60C4A9;
    color: #fffeff;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 71%
    }
    50% {
      background-position: 100% 30%
    }
    100% {
      background-position: 0% 71%
    }
  }

  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 71%
    }
    50% {
      background-position: 100% 30%
    }
    100% {
      background-position: 0% 71%
    }
  }

  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 71%
    }
    50% {
      background-position: 100% 30%
    }
    100% {
      background-position: 0% 71%
    }
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 71%
    }
    50% {
      background-position: 100% 30%
    }
    100% {
      background-position: 0% 71%
    }
  }

  .modal-md {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .modal-md-message {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }
  .modal-content {
    overflow-y: auto;
    background-color: #fefefe;
    margin: auto;

    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    height: 80vh;
  }

  /* Modal Content */
  .modal-content-message {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    height: 30vh;
  }
  .message-input{
    width: 75%;
    height: 50px;
    border: 0;
    -webkit-box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
    -moz-box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
    box-shadow: 0px 0px 21px 11px rgba(40, 62, 74, 0.25);
    padding: 10px;
  }

  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  label {
    width: 100px;
    text-align: right;
  }

  .modal-content::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  .modal-content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
  }

  .modal-content::-webkit-scrollbar-thumb {
    background-color: #0ae;
    background-image: -webkit-gradient(linear, 0 0, 0 100%,
    color-stop(.5, rgba(255, 255, 255, .2)),
    color-stop(.5, transparent), to(transparent));
  }
</style>
