<template>
  <div>
    <b-navbar toggleable="lg" class="fixed-top custom-header" :class="showBackground ? 'background':'background-op'">
      <div class="d-inline-flex col-12   ">
        <div class="col-4  col-md-4 col-sm-4">
          <div class="d-lg-inline-flex  float-right">
            <div v-outside>
              <div :class="barPhotoStatus ?  'pp-image-place' : ''">
                <transition name="slide">
                  <img src="../../assets/pp.jpeg" v-if="barPhotoStatus" class="main-pp-image"
                       @click="ppBarImageAction=true" width="40" height="40">
                </transition>
              </div>
              <div class="pp-bar-image-action" v-show="ppBarImageAction">
                <div class="text-center mt-3">
                  <div class="" style="cursor: pointer;" @click="showProfile('profile')">
                    Profile
                  </div>
                  <div class=" mt-2">
                    Logout
                  </div>
                </div>
              </div>
            </div>
            <b-collapse id="nav-collapse" is-nav>
            <div class="mt-2 float-right d-lg-inline-flex">
              <router-link
                active-class="active-page"
                to="/index"
                tag="div"
                exact>
                <img src="../../assets/main.png" class="main-logo" width="25" height="25">
              </router-link>
              <router-link
                active-class="active"
                to="/messages"
                tag="div"
                exact>
                <img src="../../assets/messages.png" class="messages-logo" width="25" height="25">
              </router-link>
              <router-link
                active-class="active"
                to="/discover"
                tag="div"
                exact>
                <img src="../../assets/watch.png" class="messages-logo" width="25" height="25">
              </router-link>
              <div @click="showProfile('asd')">
                <img src="../../assets/profil.png" class="messages-logo" width="25" height="25">

              </div>
            </div>
            </b-collapse>
          </div>
        </div>
        <div class="col-4  text-center ">
          <img class="brand" height="35" width="135" src="../../assets/logo.png">
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <div class="col-4  ml-1">
          <div v-outside>
            <input class="" @click="openSearch" placeholder="Search"
                   :class="searchStatus ? 'search-button-focus' :'search-button'">
            <transition name="el-zoom-in-top">
            <div class="search-field text-center" v-show="searchStatus">
              <button class="search-filter-button">Startup</button>
              <button class="search-filter-button">Developer</button>
              <button class="search-filter-button">Investor</button>
              <button class="search-filter-button">Looking for a Team</button>
              <button class="search-filter-button">Just a User</button>
              <div class="search-field-button text-center">
                <el-collapse-transition>
                <button class="search-field-button-search">Search</button>
                </el-collapse-transition>
              </div>
            </div>
            </transition>
          </div>
        </div>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<script>
    import { BNavbar } from 'bootstrap-vue'
    export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1',},
                searchStatus: false,
                ppBarImageAction: false,

            }
        },
        computed: {
            barPhotoStatus() {
                return this.$store.getters.getHeaderProfileStatus;
            },
            showBackground(){
                return this.$store.getters.getHeaderBackground;
            }

        },
        methods: {
            openSearch() {
                this.searchStatus = true;
            },
            showProfile(actionType){
                this.$store.dispatch('showProfile',localStorage.getItem("userId")).then(response=>{
                    this.$router.push({name : "profile", params : {
                            myProfile : true
                        }})
                });
            }
        },
        directives: {
            'outside': {
                bind: function (el, binding, vnode) {

                    el.addEventListener('click', (e) => {
                        e.stopPropagation()

                    },);
                    window.addEventListener('click', function (event) {
                        vnode.context.searchStatus = false;
                        vnode.context.ppBarImageAction = false;
                    })
                },
            }
        },
        components : {
           BNavbar
        }

    }
</script>
<style>

  .custom-header{
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }
  .background {
    background-color: #283e4a;
  }
  .background-op{
  }

  .post-image {
    border-radius: 50px;
  }

  .brand {
    cursor: pointer;
  }

  .search-button {
    width: 70px;

    height: 30px;
    border-radius: 10px;
    padding-left: 5px;
  }

  .search-from {

  }

  .search-button {
    width: 250px;
    border: 0;
    height: 30px;
    border-radius: 2px;
    transition: width 500ms ease-in-out;

  }

  .search-button-focus {
    width: 350px;
    border: 0;
    height: 30px;
    border-radius: 2px;
    transition: width 500ms ease-in-out;
  }

  .main-logo {
    cursor: pointer;
    margin-left: 25px;
  }

  .messages-logo {
    cursor: pointer;
    margin-left: 25px;

  }

  .main-pp-image {
    border-radius: 50%;
    cursor: pointer;

  }

  .search-field {
    margin-top: 15px;
    width: 420px;
    z-index: 100;
    padding: 20px;
    background-color: white;
    margin-left: -30px;
    position: fixed;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);

  }

  .search-filter-button {
    font-size: 12px;
    background-color: #f4f4f4;
    color: #283e4a;
    border: 0;
    padding: 5px;
    margin-top: 5px;
  }

  .search-field-button {
    border: 0;
  }

  .search-field-button-search {
    border: 0;
    background-color: #283e4a;
    color: #f5f5f5;
    margin-top: 10px;
    padding: 8px;
  }

  .pp-bar-image-action {
    width: 250px;
    height: 95px;
    padding-left: 10px;
    position: fixed;
    margin-top: 10px;
    background-color: white;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }


  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;

  }

  @keyframes slide-in {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0px);

    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-100px);
    }
  }
  /*İmage animation asd */
</style>
