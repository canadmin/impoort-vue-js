<template>
  <div class="right-side card-body mt-5  ">
    <div class="text-center">
      <img :src="user.profileImgUrl !== null? user.profileImgUrl: ''" width="40" height="40" class="left-image">
      <div class="mt-2">
        <span class="right-name">{{user.fullName}}</span>
      </div>
      <div class="text-center">
        <span class="right-title">{{user.department}}</span>
      </div>
    </div>
    <hr>

    <div class="mt-5">
      <div class="text-left mt-2">
        <span class="right-title">{{user.watcherCount}} Watcher</span>
      </div>
      <div class="text-left mt-2">
        <span class="right-title">{{user.watchingCount}} Watching</span>
      </div>
      <div class="text-left mt-2">
        <span class="right-title">{{user.watchingPostCount}} Watched Post</span>
      </div>
      <div class="text-center discover">
        <span class="right-name">+</span>
        <span class="right-title">Discover New Product/Investment/Developer</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                username : null,
                user : null
            }
        },
        created() {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
    }
</script>

<style scoped>

  .right-side {
    top: 4em;
    width: 250px;
    height: 450px;
    float: left;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 1;
  }

  .left-image {
    border-radius: 50%;
  }

  .right-name {
    font-size: 14px;
  }

  .right-title {
    font-size: 13px;
  }

  .discover {
    margin-top: 110px;
  }

</style>
