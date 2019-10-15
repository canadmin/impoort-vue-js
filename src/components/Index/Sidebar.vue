<template>
  <div class="" :class="collapse ? 'sidebar-collapse' : 'sidebar' ">
    <ul class="list-group mt-5">
      <li class="ml-2 mr-2" > <img  src="../../assets/mainpage.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Ana Sayfa</span></li>
      <li class="ml-2 mr-2"> <img  src="../../assets/search.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Arama</span></li>
      <li class="ml-2 mr-2"> <img  src="../../assets/share.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Paylas</span></li>
      <li class="ml-2 mr-2"> <img  src="../../assets/messages.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Mesajlarim</span></li>
      <li class="ml-2 mr-2"> <img  src="../../assets/watched.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Izlediklerim</span></li>
      <li class="ml-2 mr-2"> <img  src="../../assets/profile.png" height="50" width="50"/><span v-if="!collapse" class="ml-5">Profil</span></li>
    </ul>
    <div class="toggle-button d-flex justify-content-center text-center"@click="collapseSide" >
      <span> <- </span>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                collapse :false
            }
        },
        methods : {
            asd(){
                console.log("click falan");
            },
            collapseSide(){
                this.collapse=!this.collapse;
                this.$emit("collapse",this.collapse)
            }
        }


    }
</script>

<style scoped>
.sidebar{
  width: 350px;
  height: 100%;
  background: rgb(36,101,144);
  background: linear-gradient(180deg, rgba(36,101,144,1) 0%, rgba(41,110,146,1) 64%, rgba(95,194,169,0.7819502801120448) 100%);
  position: fixed;
  margin-top: 15px;
  z-index: 1;
}
li{
  color: white;
  list-style: none;
  padding: 15px 10px;
  border-bottom: 1px solid #ffeeff;
}
.toggle-button{
    color: white;
    list-style: none;
    padding: 15px 10px;
    width: 100%;
    bottom: 0;
  position: absolute;
  cursor: pointer;
  }
  /*.sidebar .toggle-button span{
    display: block;
    width: 30px;
    height: 5px;
    background: #1b1e21;
  }*/
.sidebar-collapse{
  width: 80px;
  height: 100%;
  background: rgb(36,101,144);
  background: linear-gradient(180deg, rgba(36,101,144,1) 0%, rgba(41,110,146,1) 64%, rgba(95,194,169,0.7819502801120448) 100%);
  position: fixed;
  z-index: 1;
  margin-top: 15px;
}
img{

}
</style>
