<template>
  <div class="  main-post  mt-4">
    <div>
      <span class="watched-name"> <b>Can Yardımcı</b> (Java Developer) </span>
    </div>
    <div class="watched-name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    <hr>
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
<style scoped>
  .post-image {
    border-radius: 50px;
  }

  .main-post {
    border-radius: 12px;
  }

  .watched-name {
    margin-left: 2px;
    color: #246590
  }

  .watched-icon {
    right: 0;
  }


</style>
