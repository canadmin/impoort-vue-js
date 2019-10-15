<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light background">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <img class="asdfff" height="50" width="150" src="../../assets/logo.png">

        <ul class="navbar-nav mr-auto">

        </ul>

        <form class="form-inline my-2 my-lg-0 mr-5 search-from">
          <input class=" mr-sm-2 search-button" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

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
    background-color: #246590;
    height: 50px;
  }

  .post-image {
    border-radius: 50px;
  }

  .asdfff {
    margin-left: 50%;
    cursor: pointer;
  }
.search-button{
  width: 70px;
  border: 0;
  height: 40px;
  border-radius: 10px;
  padding-left: 5px;
}
.search-from{
  margin-right:0!important;
}
  .search-button{
    width: 250px;
    border: 0;
    height: 40px;
    border-radius: 10px;
    padding-left: 5px;
  }
  .search-button:focus{
    width: 350px;
    transition: width 500ms ease-in-out;
  }

</style>
