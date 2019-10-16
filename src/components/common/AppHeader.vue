<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light background">
      <div class="collapse navbar-collapse">
        <img src="../../assets/pp.jpeg" class="main-pp-image" width="45" height="45" >

        <img src="../../assets/main.png" class="main-logo" width="25" height="25" >
        <img src="../../assets/messages.png" class="messages-logo" width="25" height="25" >
        <img src="../../assets/watch.png" class="messages-logo" width="25" height="25" >
        <img src="../../assets/profil.png" class="messages-logo" width="25" height="25" >

        <img class="asdfff" height="35" width="135" src="../../assets/logo.png">

        <input class=" mr-sm-2 search-button" type="search" placeholder="Search" aria-label="Search">

      </div>
    </nav>

  </div>
</template>
<script>

  export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1',},

            }
        }
    }
</script>
<style>
  .background {
    background-color: #283e4a;
    height: 55px;
  }

  .post-image {
    border-radius: 50px;
  }

  .asdfff {
    cursor: pointer;
    margin-left:13%;
  }
.search-button{
  width: 70px;
  border: 0;
  right: 0;
  height: 30px;
  border-radius: 10px;
  padding-left: 5px;
}
.search-from{
    margin-left: 50%;

}
  .search-button{
    width: 250px;
    border: 0;
    height: 30px;
    border-radius: 2px;
  margin-left: 260px
  }
  .search-button:focus{
    width: 350px;
    transition: width 500ms ease-in-out;
  }
  .main-logo{
    margin-left: 35px;
    cursor: pointer;
  }
  .messages-logo{
    margin-left: 50px;
    cursor: pointer;
  }
.main-pp-image{
  border-radius: 50%;
  margin-left: 300px;
}
</style>
