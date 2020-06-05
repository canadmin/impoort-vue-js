<template>
  <div class="container  mt-5">
    <div class="discover">
      <div class="search-top-bar bg-white">
        <div class="text-center pt-5">
          <span class="">Search by Username</span>
          <input class="search-input" v-model="searchInput"/>
          <button class="search-button" @click="search()">Search</button>
        </div>
      </div>
      <div class="text-center font-weight-bold mt-2">

        <select v-model="activePage">
          <option value="User">User</option>
          <option value="Post">Post</option>
        </select>
      </div>
      <div class="result-user text-center">
        <hr>
        <div class="grid-container mt-5"  v-show="activePage == 'User'">
          <div v-for="user in users">
            <div class="grid-item">
              <img :src="user.profileImgUrl !== null? user.profileImgUrl: ''" width="80" height="80" class="pp-img">
              <div>
                {{user.fullName}}
              </div>
              <button class="watch-button" @click="watch(user.userId)">Watch +</button>
            </div>
          </div>
        </div>
        <div class="grid-container-post" v-show="activePage == 'Post'">
          <div v-for="post in posts" >
            <div class="post-grid-item">
              <span><img src="../../assets/user.png">{{post.user.fullName}}</span>

              <img :src="post.mediaUrl !== null? post.mediaUrl: ''" width="100%" height="100%" class="">

                <span><img src="../../assets/like.png">{{post.likeCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import {discoverRequests} from "../../http/discover/discoverRequests"

    export default {
        name: "Search",
        data() {
            return {
                users: [],
                searchInput: null,
                activePage: 'User',
                posts : []
            }
        },
        methods: {
            search() {
                discoverRequests.searchUser(this.searchInput).then(response => {
                    this.activePage = 'User'
                    this.users = response.data
                })
            },
            watch(userId) {
                discoverRequests.watchUser(userId).then(response => {
                    console.log(response)
                })
            },
            getPopularPost(){
                console.log("asdads")
                discoverRequests.getPopularPosts().then(response => {
                    console.log(response)
                    this.posts = response.data;

                })
            }
        },
        created() {
            let suggestedUser = discoverRequests.getSuggested().then(response => {
                this.users = response.data
            });
        },
        watch:{
            activePage(val){
                if(val === 'Post'){
                    console.log("asdasd")
                  this.getPopularPost();
                }
                console.log(val)
            }
        }
    }
</script>

<style scoped>
  .discover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);

  }

  .search-top-bar {
    width: 100%;
    height: 10vh;
    background-color: #ffffff;
    margin-top: 80px;
  }

  .result-user {
    background-color: white;
    width: 100%;
    height: 80vh;
    justify-items: center;
    overflow-y: auto;

  }

  .custom-font {
    color: white;
  }

  .search-input {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    border: 0;
    width: 400px;
    height: 40px;
    padding: 5px;
  }

  .search-button {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    border: 0;
    height: 40px;
    width: 100px;
    padding: 5px;
  }

  .search-button:hover {
    background-color: black;
    color: white;
  }

  .grid-container {
    overflow-y: auto;
    display: inline-grid;
    grid-template-rows: 300px 300px 300px;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 20px;
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    height: 250px;
  }
  .grid-container-post{
    overflow-y: auto;
    display: inline-grid;
    grid-template-rows: 500px 500px ;
    grid-template-columns: 500px 500px;
    grid-gap: 20px;
  }
  .post-grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    height: 350px;
  }
  .watch-button {
    border-radius: 5px;
    background-color: white;
  }

  .watch-button:hover {
    background-color: #60C4A9;
    color: #fffeff;
  }
  .pp-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

</style>
