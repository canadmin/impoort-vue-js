<template>
  <div>
    <div>
      <div class="text-center mt-3 watch-single">
        <img src="../../assets/stonks.jpg" width="40" height="40" class="watch-image">
        <span class="watch-name-single">{{suggest.fullName}}</span>
        <button class="watch-button ml-5" v-text="useByComponent === 'index' ? '+' : '+ Watch'">+</button>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props : ["useByComponent","suggest"],

    }

</script>

<style scoped>
  .watch-image {
    border-radius: 50%;
  }

  .watch-button {
    border: 0;
    color: #ffffff;
    font-size: 13px;
    background-color: #60C4A9;
    margin-left: 15px;
  }

  .watch-single {
    cursor: pointer;
    padding: 3px;
  }

  .watch-single:hover {
    background-color: #f5f5f5;
  }

  .watch-name-single {
    font-size: 13px;
  }
</style>
