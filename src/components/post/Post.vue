<template>
  <div class="container ">
    <div class="row ">
      <div class="col-12 main-post  card-body mb-n4">
        <img v-bind="mainProps" class="post-image" rounded="circle" alt="Circle image" src="../../assets/pp.jpeg"/>

        <span> <b class="post-name">Can Yardımcı</b> </span>
        <span class="float-right">5 gün önce</span>
        <hr>
        <div class="description-post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit, ut sequi aliquid id impedit pariatur
          hic soluta
          at accusamus error expedita, deserunt ex quam quis maxime autem numquam consequuntur. Deleniti soluta, maiores
          illum dicta sint
          eniam tempora esse consequatur sed asperiores quasi eligendi eveniet cum doloribus excepturi molestias
          delectus.
        </div>
        <div class="post-description-image">
          <img src="../../assets/stonks.jpeg" width="100%"
          height="300">
        </div>

        <hr>
        <div class="row  text-center mt-n3 mb-n2">
          <div class="col-4" @click="like = !like">
            <img :src="like ? getImageUrl('like') : getImageUrl('liked')" height="25" width="25">
          </div>
          <div class="col-4">
            <img src="../../assets/comment.png"  @click="expandComment =! expandComment" height="25" width="25"/>
          </div>
          <div class="col-4" @click="watch = !watch">
            <img :src="watch ? getImageUrl('watched') : getImageUrl('liked')" height="25" width="25"/>
          </div>
        </div>
        <!-- eger posta yorum yapılmışsa veya yorun yapılacaksa-->
        <div>
          <div v-show="expandComment">
          <div class="text-center mt-4" >
            <span v-text="'Comments'"></span>
          </div>
          <div class="comments-back pt-2">
            <app-comment v-for="i in 2"></app-comment>
          </div>
          </div>
          <!--- eğer yorum yapılacaksa-->
           <hr>
          <div class="add-comment mt-4">
            <div class="">
              <input type="text" class="comment-input" placeholder="Yorum yaz">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
    //v-bind:src="like.png ? '/src/assets/like.png.png' : ''"
    import Comment from "./Comment";
    export default {
        data() {
            return {
                mainProps: {blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1',},
                like: false,
                watch: false,
                expandComment :false

            }
        },
        methods: {
            getImageUrl(image) {
                var images = require.context('../../assets', false, /\.png$/);
                return images('./' + image + '.png');
            },

        },
        components : {
            appComment:Comment
        }
    }
</script>
<style scoped>
  .main-post {
    background-color: #ffffff;
    border-radius: 0px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }

  .post-image {
    border-radius: 50px;
  }

  .post-name {
    margin-top: 15px;
    font-size: 12px;
  }

  img {
    cursor: pointer;
  }

  .description-post {
    font-size: 14px;
  }
  .comment-input{
    width: 100%;
    border-radius: 5px;
    border: 0;
    background-color: #f5f5f5;
    padding-left: 15px;
    height: 35px;
  }
  .comments-back{
    background-color: #f5f5f5;
    border-radius: 5px;
  }
</style>
