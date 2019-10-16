<template>
  <div class="container ">
    <div class="row ">
      <div class="col-12 main-post  card-body mb-n4">
        <img v-bind="mainProps" class="post-image" rounded="circle" alt="Circle image" src="../../assets/pp.jpeg"></img>

        <span> <b class="post-name">Can Yardımcı</b> </span>
        <span class="float-right">5 gün önce</span>
        <hr>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit, ut sequi aliquid id impedit pariatur
          hic soluta
          at accusamus error expedita, deserunt ex quam quis maxime autem numquam consequuntur. Deleniti soluta, maiores
          illum dicta sint
          eniam tempora esse consequatur sed asperiores quasi eligendi eveniet cum doloribus excepturi molestias
          delectus.
        </div>
        <hr>
        <div class="row  text-center mt-n3 mb-n2">
          <div class="col-4" @click="like = !like">
            <img :src="like ? getImageUrl('liked') : getImageUrl('like')" height="25" width="25">
          </div>
          <div class="col-4">
            <img src="../../assets/like.png" height="25" width="25"/>
          </div>
          <div class="col-4" @click="watch = !watch">
            <img :src="watch ? getImageUrl('watched') : getImageUrl('like')" height="25" width="25"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    //v-bind:src="like.png ? '/src/assets/like.png.png' : ''"
    export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1',},
                like: false,
                watch: false,

            }
        },
        methods: {
            getImageUrl(image) {
                var images = require.context('../../assets', false, /\.png$/);
                return images('./' + image + '.png');
            }
        }
    }
</script>
<style scoped>
  .main-post {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  }

  .post-image {
    border-radius: 50px;
  }

  .post-name {
    margin-top: 15px;
  }

  img {
    cursor: pointer;
  }
</style>
