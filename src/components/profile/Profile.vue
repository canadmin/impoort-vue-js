<template>
  <div>
    <app-message-box class="ml-3"></app-message-box>
    <div class="container-fluid profile-general ">
      <div class="row mt-4 ml-5">
        <div class="col-3 mt-5">
          <div class="profile-info">
                <div class=" mt-2">
                  <div class="text-center">
                    <img src="../../assets/stonks.jpg" width="80" height="80"  class="pp-profile-img">
                    <div class="mt-3">
                      <div class="profile-watch">
                      <span class="profile-name">Can Yardımcı</span>
                      <button class="watch-button">+ WATCH</button>
                      </div>

                      <p class="mt-3"><span class="profile-name ml-2">Full Stack Developer</span></p>
                      <hr>
                    </div>
                  </div>
                  <div class="info-user mt-3">
                    <div class="profile-description ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit, ut sequi aliquid id impedit pariatur hic soluta at accusamus error expedita, deserunt ex quam quis maxime autem numquam consequuntur. Deleniti soluta, maiores illum dicta sint eniam tempora esse consequatur sed asperiores quasi eligendi eveniet cum doloribus excepturi molestias delectus.
                    </div>
                    <div class="social-info-left mt-4">
                      <span >258 Watcher</span>
                    </div>
                    <div class="social-info-left">
                      <span >356 Watching</span>
                    </div>
                    <div class="social-info-left">
                      <span >12 Post</span>
                    </div>
                    <div class="social-info-left">
                      <span >21 Watching Post</span>
                    </div>
                    <div class="text-center mt-4">
                      <span>Experience</span>
                      <hr>
                    </div>
                    <div>
                      <span class="profile-description">Intern Java Developer - Ozgur Yazilim A.Ş.</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-4 mt-5">
            <div class="text-center ">
            </div>
          <div  v-for="i in 6">
            <app-post class="mb-5"></app-post>
          </div>
        </div>
        <div class="col-1 mt-5 ">
          <div class="social-info">
            <div class="container-fluid">
              <div class="row">
                <div class="watcher-tab  col-6" :class="activeTab ? 'active-tab' :''" @click="activeTab = !activeTab">
                  Watcher
                </div>
                <div class="watching-tab col-6 " :class="!activeTab ? 'active-tab' : ''" @click="activeTab =! activeTab">
                  Watching
                </div>
              </div>
            </div>

          <app-user v-for="i in 4"></app-user>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from "../post/Post";
  import User from "../common/User";
  import IndexMessagesBox from "../Index/chatBox/IndexMessagesBox";

  export default {
        data(){
            return {
                activeTab : true
            }
        },
        components : {
            appPost : Post,
            appUser : User,
            appMessageBox : IndexMessagesBox
        }
    }
</script>

<style scoped>
.profile-info{
  height: 800px;
  width: 450px;
  float: right;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
}

.social-info{
  width: 350px;
  float: left;
  height: 800px;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
}
  .profile-general{
    margin-left: 5%;
  }

  .pp-profile-img{
    border-radius: 50%;
  }
  .profile-name{
    font-size: 15px;
  }
hr{
  width: 90%;
}
  .profile-description{
    text-align: left;
    padding-left: 20px;
    margin-right: 20px;
    font-size: 14px;
  }
  .social-info-left{
    padding-left: 20px;
    margin-top: 20px;
    font-size: 15px;
  }
.watch-button{
  border: 0;
  color: #ffffff;
  font-size: 13px;
  background-color: #60C4A9;
  margin-left: 15px;
}
  .profile-watch{
    margin-left: 105px;
  }

  .watcher-tab{
    height: 70px;
    text-align: center;
    cursor: pointer;
    padding: 20px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);

  }
.watching-tab{
  height: 70px;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
}
  .active-tab{
    background-color: #f5f5f5;
  }
</style>
