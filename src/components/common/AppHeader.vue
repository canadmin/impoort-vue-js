<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light background">
      <img class="asdfff" height="50" width="150" src="../../assets/logo.png">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

        </ul>
        <form class="form-inline my-2 my-lg-0 mr-5">
          <input class=" mr-sm-2 search-button" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav d-flex justify-content-end mr-5">
          <img v-bind="mainProps" class="post-image" rounded="circle" alt="Circle image"
               src="../../assets/pp.jpeg"></img>
        </ul>
      </div>
    </nav>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1',},

            }
        }
    }
</script>
<style>
  .background {
    background-color: #246590;
  }

  .post-image {
    border-radius: 50px;
  }

  .asdfff {
    margin-left: 75px;
  }
.search-button{
  width: 70px;
  border: 0;
  height: 40px;
  border-radius: 10px;
  padding-left: 5px;
}
  .search-button{
    width: 70px;
    border: 0;
    height: 40px;
    border-radius: 10px;
    padding-left: 5px;
  }
  .search-button:focus{
    width: 250px;

  }
</style>
