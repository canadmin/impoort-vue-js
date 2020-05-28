<template>
  <div class="left-side card-body mt-5  text-center">
    <div>
      Suggested
      <hr>
      <div v-for="suggest in suggestedList">
        <app-user :useByComponent="'index'" :user="suggest"></app-user>
      </div>
      <div class="mt-4">
       <span class="see-more">See More</span>
      </div>
    </div>
  </div>
</template>

<script>
    import User from "../../common/User";

    export default {

        components: {
            appUser: User
        },
        props:["suggestedList"]
    }
</script>

<style scoped>
  .left-side {
    position: sticky;
    position: -webkit-sticky;
    top: 4em;
    width: 250px;
    height: 450px;
    float: right;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 1;
  }

  .left-image {
    border-radius: 50%;
  }
  .see-more{
    font-size: 13px;
  }
</style>
