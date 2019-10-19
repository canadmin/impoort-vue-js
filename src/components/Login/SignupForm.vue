<template>
  <div class="container w-50">
    <transition name="slide" appear>
      <div v-if="currentPage == 1">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control form-control-lg"
                   placeholder="First Name">
          </div>
          <div class="col">
            <input type="text" class="form-control form-control-lg"
                   placeholder="Last Name">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="email" class="form-control form-control-lg"
                   placeholder="E-mail">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="password" class="form-control form-control-lg"
                   placeholder="Password">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="password" class="form-control form-control-lg"
                   placeholder="Re-Password">
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide" appear>
      <div v-if="currentPage == 2">
        <div class="row">
          <div class="col">
            <input type="tel" class="form-control form-control-lg "
                   placeholder="Phone Number">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="text" class="form-control form-control-lg"
                   placeholder="City">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="date" class="form-control form-control-lg"
                   placeholder="Date of Birth/established">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h3>Gender</h3>
            <div class="form-check-inline ">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Male')"
                     :class="selectedGender == 'Male' ? 'active': ''" value="  Male  ">
            </div>
            <div class="form-check-inline">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Famele')"
                     :class="selectedGender == 'Famele' ? 'active': ''" value="Famale">
            </div>
            <div class="form-check-inline">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Optional')"
                     :class="selectedGender == 'Optional' ? 'active': ''" value="Optional">
            </div>
            </p>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide" appear>
      <div v-if="currentPage == 3">
        <div class="row">
          <div class="col">
            <p>Ben bir
              <select class="browser-default custom-select ">
                <option value="1">Geliştiriciyim</option>
                <option value="2">Yatırımcıyım</option>
                <option value="3">Startup'ım</option>
              </select>
            </p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="text" class="form-control form-control-lg"
                   placeholder="Sektör">
          </div>
        </div>
      </div>
    </transition>
    <div class="row mt-4">
      <div class="col">
        <button class="form-control btn btn-color" @click="nextPage(currentPage)">{{buttonPageName}}</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 1,
                buttonPageName: "Next",
                selectedGender: "Optional"
            }
        },
        methods: {
            nextPage(currentPage) {
                if (currentPage >= 2) {
                    console.log("post gonderildi" + this.currentPage);
                    this.currentPage = 3;
                    this.buttonPageName = "Complete"
                } else {
                    this.currentPage++;
                    this.buttonPageName = "Next"
                }
            },
            setGender(gender) {
                this.selectedGender = gender;
            }
        },
    }
</script>
<style scoped>
  .btn-color {
    background-color: #60C4A9;
    color: #ffffff;
  }


  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }


  .slide-leave-active {
    animation: slide-out 0s ease-out forwards;
    transition: opacity 0s;
    opacity: 0;

  }

  @keyframes slide-in {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0px);

    }
  }

  h3 {
    color: #60C4A9;
  }

  p {
    color: #60C4A9;
  }

  .active {
    color: #ffffff;
    background-color: #60C4A9;
  }
</style>
