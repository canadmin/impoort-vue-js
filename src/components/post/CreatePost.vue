<template>
  <div>
  <div v-outside class="share-new-post text-center mt-5 bg-white" v-show="!createNewPost"  @click="createNewPost=true" >
    <img src="../../assets/share.png">
    <hr>
    <div class="mb-3">
      Yeni Gönderi Paylaş
    </div>
    <hr>
  </div>
  <div v-outside class="new-post text-center mt-5 bg-white" v-show="createNewPost===true"  >
    <textarea class="post-description" placeholder="Write some thing..."></textarea>
    <hr>
    <div class="mb-3">
    <button class="btn btn-primary">Share</button>
    </div>
    <hr>
  </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                createNewPost : false,
                closeNewPost : true
            }
        },
        methods : {

        },
        directives : {
            'outside' : {
                bind: function (el, binding, vnode) {

                    el.addEventListener('click', (e) => {
                        console.log('received NATIVE(blur) - event value:', e.target);
                        e.stopPropagation()

                    },);
                    window.addEventListener('click',function (event) {
                        if(vnode.context.createNewPost===true){
                            vnode.context.createNewPost=false
                        }
                    })
                },
            }
        }
    }
</script>

<style scoped>
  .share-new-post{
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    transition: box-shadow 83ms;
    cursor: pointer;
  }
  .share-new-post:hover{
    box-shadow: 0 0 0 1px #0b2e13, 0 2px 3px rgba(0, 0, 0, .2);
  }
.new-post{
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  z-index: 100;
  filter: alpha(opacity = 50); /* required for opacity to work in IE */

}

  .post-description{
    width: 100%;
    height: 250px;
  }

textarea{
  resize: none;
}
</style>
