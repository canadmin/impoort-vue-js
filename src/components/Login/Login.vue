<template>
  <div class="root">
    <div class="row h-100">
      <div class="h-100 d-inline-block left bg-left col-sm-12 col-md-6 ">
        <div class="d-flex justify-content-center mt-5 ">
          <img height="100" width="351" src="../../assets/logo.png">
        </div>

      </div>
      <div class="col-sm-12 col-md-6 align-self-center bg-right">

        <div class="text-center">

          <component :is="selected">
          </component>

          <div v-show="selected=='appLogin'">
            <p class="element-p-color element-p" @click="changeForm(selected)">Henüz bir hesabınız yok mu?</p>
            <p class="mt-n3 element-p-color element-p-color-opacity">Veya</p>
            <p class="mt-n3 element-p element-p-color">Şifremi unuttum</p>
          </div>
          <div v-show="selected=='appSignup'">

          </div>
          <p v-show="selected=='appSignup'" class="element-p-color element-p" @click="changeForm(selected)">Zaten bir hesabın var mı?</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import SignUpForm from "./SignupForm";
    import LoginForm from "./LoginForm";

    export default {
        data() {
            return {

                selected: "appLogin",
                active: 0
            }
        },
        components: {
            appSignup: SignUpForm,
            appLogin: LoginForm,
        },
        methods: {
            changeForm(activeForm) {
                if (activeForm === "appSignup") {
                    this.selected = "appLogin";
                } else {
                    this.selected = "appSignup";
                }
            }
        }
    }
</script>

<style scoped>
  .root {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
  }

  .bg-left {
    background-color: #283e4a;
  }


  back {
    background: #F8F1FA;
    background-color: #F8F1FA;
    height: 100%;
  }

  .btn-color {
    background-color: #60C4A9;
    color: #ffffff;
  }

  .element-p-color {
    color: #60C4A9;
  }

  .element-p-color-opacity {
    opacity: 0.5;
  }

  .element-p:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .image {
    opacity: 0.75;
  }

  .fill {
    min-height: 100%;
    height: 100%;
  }

</style>
