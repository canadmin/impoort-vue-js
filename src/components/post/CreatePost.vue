<template>
  <div>
    <div v-outside class="share-new-post text-center mt-5 bg-white" v-show="!createNewPost" @click="createNewPost=true">
      <img src="../../assets/share.png">
      <hr>
      <div class="mb-3">
        Create New Post
      </div>
      <hr>
    </div>
    <div v-outside class="new-post text-center mt-5 bg-white" v-show="createNewPost===true">
      <textarea class="post-description" placeholder=" write something..."></textarea>
      <button class="delete-image-button" @click="postSelectImage=null" v-if="postSelectImage!=null">X</button>
      <p class="">
        <img height="75" class="img-responsive text-center mt-2"
                       src="../../assets/pp.jpeg" v-show="postSelectImage != null" :src="postSelectImage">
      </p>
      <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <hr>
      <div class="mb-3">
        <button class="share-button ">Share</button>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                createNewPost: false,
                closeNewPost: true,
                postSelectImage: null
            }
        },
        methods: {
            onChange(e) {
                const file = e.target.files[0];
                this.postSelectImage = URL.createObjectURL(file);
            }
        },
        directives: {
            'outside': {
                bind: function (el, binding, vnode) {
                    el.addEventListener('click', (e) => {
                        e.stopPropagation()

                    },);
                    window.addEventListener('click', function (event) {
                        if (vnode.context.createNewPost === true) {
                            vnode.context.createNewPost = false
                        }
                    })
                },
            }
        }
    }
</script>

<style scoped>
  .share-new-post {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    cursor: pointer;

  }

  .share-new-post:hover {
    box-shadow: 0 0 0 1px #0b2e13, 0 2px 3px rgba(0, 0, 0, .2);
  }

  .new-post {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    z-index: 100;
    filter: alpha(opacity=50); /* required for opacity to work in IE */

  }

  .post-description {
    height: 250px;
    width: 100%;
    margin-top: 0;
  }

  textarea {
    resize: none;
    padding: 5px;
  }

  .share-button {
    border: 0;
    color: white;
    background-color: #60C4A9;
    width: 70px;
    height: 30px;
    border-radius: 5px;
  }

  .share-button:active {
    background-color: #2a2a2e;
  }

  .add-image-button {
    border: 0;
    color: white;
    background-color: #2a2a2e;
    width: 70px;
    height: 30px;
    border-radius: 5px;
  }

  .add-image-button:active {
    background-color: #2a2a2e;
  }

  .delete-image-button {
    background-color: #2a2a2e;
    border: 0;
    color: white;
  }
</style>
