<template>
    <div class="container ">
        <div class="row">
            <div class="col-10 main-post mt-4 mb-2">
                <div class="col p-2"></div>
                    <img v-bind="mainProps" class="post-image" rounded="circle" alt="Circle image" src="../../assets/pp.jpeg"></img>

                     <span > <b class="post-name">Barancan Yardımcı</b> </span>
                     <span class="float-right">5 gün önce</span>
                     <hr>

                     <div>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit, ut sequi aliquid id impedit pariatur hic soluta
                          at accusamus error expedita, deserunt ex quam quis maxime autem numquam consequuntur. Deleniti soluta, maiores illum dicta sint
                          eniam tempora esse consequatur sed asperiores quasi eligendi eveniet cum doloribus excepturi molestias delectus.
                     </div>
                    <hr>
                    <div class="row p-1 text-center mt-n3">
                        <div class="col-4" @click="like = !like">
                            <img  :src="like ? getImageUrl('liked') : getImageUrl('like')"  height="30" width="30">
                        </div>
                        <div class="col-4">
                            <img  src="../../assets/comment.png" height="30" width="30"/>
                        </div>
                        <div class="col-4" @click="watch = !watch">
                            <img  :src="watch ? getImageUrl('watched') : getImageUrl('watch')" height="30" width="30"/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
//v-bind:src="like ? '/src/assets/like.png' : ''"
export default {
    data() {
        return {
           mainProps: { blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1', },
           like : false,
           watch : false,

        }
    },
    methods : {
        getImageUrl(image){
            var images = require.context('../../assets',false, /\.png$/);
            return images('./'+image+'.png');
        }
    }
}
</script>
<style  scoped>
.main-post{
    background-color: #ffffff;
    border-radius: 12px;
}
.post-image {
    border-radius: 50px;
}
.post-name{
    margin-top: 15px;
}
img {
    cursor: pointer;
}
</style>
