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
        <div class="grid-container mt-5">
          <div v-for="user in users" v-show="activePage == 'User'">
            <div class="grid-item">
              <img src="../../../build/logo.png" width="80px">
              <div>
                {{user.fullName}}
              </div>
              <button class="watch-button" @click="watch(user.userId)">Watch +</button>
            </div>
          </div>
          <div v-for="user in users" v-show="activePage == 'Post'">
            <div class="grid-item">
              <img src="../../../build/logo.png" width="80px">
              <div>
                {{user.fullName}}ss
              </div>
              <button class="watch-button" @click="watch(user.userId)">Watch +</button>
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
                activePage: 'User'
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
            }
        },
        created() {
            let suggestedUser = discoverRequests.getSuggested().then(response => {
                this.users = response.data
            });
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

  .watch-button {
    border-radius: 5px;
    background-color: white;
  }

  .watch-button:hover {
    background-color: #60C4A9;
    color: #fffeff;
  }
</style>
