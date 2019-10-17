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

        <div v-outside>
        <input class=" mr-sm-2 " @click="deneme" placeholder="Search" :class="searchStatus ? 'search-button-focus' :'search-button'"  >
          <div class="search-field text-center"   v-show="searchStatus" >
            <button class="search-filter-button">Startup</button>
            <button class="search-filter-button">Developer</button>
            <button class="search-filter-button">Investor</button>
            <button class="search-filter-button">Looking for a Team</button>
            <button class="search-filter-button">Just a User</button>
            <div class="search-field-button text-center">
              <button class="search-field-button-search">Search</button>
            </div>
          </div>

        </div>
      </div>
    </nav>


  </div>
</template>
<script>

  export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1',},
                searchStatus : false
            }
        },
        watch : {
            searchStatus(value){
            }
        },
      methods : {
          deneme(){
              this.searchStatus=true;
          }
      },directives : {
          'outside' : {
              bind: function (el, binding, vnode) {

                  el.addEventListener('click', (e) => {
                      e.stopPropagation()

                  },);
                  window.addEventListener('click',function (event) {
                      vnode.context.searchStatus=false;
                  })
              },
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
      margin-left: 260px;
    transition: width 500ms ease-in-out;

  }
  .search-button-focus{
    width: 350px;
    border: 0;
    height: 30px;
    border-radius: 2px;
    margin-left: 260px;
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
  .search-field{
    margin-top: 15px;
    width: 420px;
    z-index: 100;
    padding: 20px;
    margin-left: 220px;
    background-color: white;
    position: fixed;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);

  }
  .search-filter-button{
    font-size: 12px;
    background-color: #f4f4f4;
    color: #283e4a;
    border: 0;
    padding: 5px;
    margin-top: 5px;
  }
  .search-field-button{
    border: 0;
  }
  .search-field-button-search{
    border: 0;
    background-color: #283e4a;
    color: #f5f5f5;
    margin-top: 10px;
    padding: 8px;
  }
</style>
