<template>
<div>
 <div class="mt-3"></div>    
<app-nav></app-nav>
<div class="back mt-2">
<div class="container-fluid">
     <div class="mt-4">&nbsp</div>
     <div class="mt-4">&nbsp</div>
  <div class="row">
    <div class="col-7 text-center">
        <p class="element-p-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam.</p>
         <img class="image" src="../../assets/side.jpg"><!--- 50 130-->
    </div>
    <div class="col-4 text-center ">
       
        <div class="mt-4">&nbsp</div>
        
            <component :is="selected">
            </component>
         
        <div v-show="selected=='appLogin'">
            <p class="element-p-color element-p" @click="changeForm(selected)">Henüz bir hesabınız yok mu?</p>
            <p class="mt-n3 element-p-color element-p-color-opacity">Veya</p>
            <p class="mt-n3 element-p element-p-color">Şifremi unuttum</p>
        </div>
         <div v-show="selected=='appSignup'">
            <p class="element-p-color element-p" @click="changeForm(selected)">Zaten bir hesabın var mı?</p>
        </div>
    </div>
  </div>
</div>
 <div class="mt-4">&nbsp</div>
     <div class="mt-4">&nbsp</div>
</div>


</div>
</template>

<script>
import LoginNav from "./LoginNav";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
export default {
    data(){
        return {
            selected : "appLogin",
        }
    },
    components : {
        appNav : LoginNav,
        appSignup :SignUpForm,
        appLogin : LoginForm
    },
    methods :{
        changeForm(activeForm){
            if(activeForm == "appSignup"){
                this.selected = "appLogin";
            }else{
                this.selected = "appSignup";
            }
        }
    }    
}
</script>

<style scoped>
.back {
    background: #F8F1FA;
    background-color :#F8F1FA; 
    height: 100%;
}
.btn-color {
    background-color: #60C4A9;
    color: #ffffff;
}
.element-p-color {
    color :#60C4A9;
}
.element-p-color-opacity{
    opacity: 0.5;
}
.element-p:hover{
    opacity: 0.5;
    cursor: pointer;
}
.image{
    opacity: 0.75;
}


</style>