<template>
  <div class="container w-75">
    <transition name="slide" appear>
      <div v-show="currentPage === 1">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control form-control-lg" v-model="registerUser[0].firstName"
                   placeholder="First Name">
          </div>
          <div class="col">
            <input type="text" class="form-control form-control-lg" v-model="registerUser[0].lastName"
                   placeholder="Last Name">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="email" class="form-control form-control-lg" v-model="registerUser[0].email"
                   placeholder="E-mail">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="password" class="form-control form-control-lg" v-model="registerUser[0].password"
                   placeholder="Password">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="password" class="form-control form-control-lg" v-model="registerUser[0].password"
                   placeholder="Re-Password">
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide" appear>
      <div v-show="currentPage === 2">
        <div class="row">
          <div class="col">
            <input type="tel" class="form-control form-control-lg " v-model="registerUser[0].phoneNumber"
                   placeholder="Phone Number">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="text" class="form-control form-control-lg" v-model="registerUser[0].city"
                   placeholder="City">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="date" class="form-control form-control-lg" v-model="registerUser[0].birthDate"
                   placeholder="Date of Birth/established">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h3>Gender</h3>
            <div class="form-check-inline ">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Male')"
                     :class="selectedGender === 'Male' ? 'active': ''" value="  Male  ">
            </div>
            <div class="form-check-inline">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Famele')"
                     :class="selectedGender === 'Famele' ? 'active': ''" value="Famale">
            </div>
            <div class="form-check-inline">
              <input class="btn" type="button" id="MaleButton" @click="setGender('Optional')"
                     :class="selectedGender === 'Optional' ? 'active': ''" value="Optional">
            </div>
            </p>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide" appear>
      <div v-show="currentPage === 3">
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
            <input type="text" class="form-control form-control-lg" v-model="registerUser[0].sector"
                   placeholder="Title">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <textarea type="text" class="form-control form-control-lg" v-model="registerUser[0].description"
                      placeholder="Description"> </textarea>
          </div>
        </div>
      </div>
    </transition>
    <div class="row mt-4">
      <div class="col">
        <button class=" btn btn-color" @click="nextPage(currentPage)">{{buttonPageName}}</button>
      </div>
    </div>

    <div class="mt-5  text-left">
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                registerUser : [
                    {
                    description : null,
                    sector : null,
                    userType : 1,
                    firstName : null,
                    lastName : null,
                    email : null,
                    city  : null,
                    birthDate  : null,
                    gender  : "male",
                    password  : null,
                    phoneNumber  : null,
                    experienceYear : null,
                    experienceCompanies : null,
                    employeeCount : null
             }
                ],
                currentPage: 1,
                buttonPageName: "Next",
                selectedGender: "Optional",
                active: 0,


            }
        },
        methods: {
            nextPage(currentPage) {
                    if(currentPage < 2){
                    this.currentPage++;
                    this.buttonPageName = "Next"
                    }else if(currentPage === 2){
                        this.currentPage++;
                    }else{
                        this.buttonPageName = "Complete"
                        this.$store.dispatch("registerUser", this.registerUser[0]);

                    }
                    this.next()
                },
            setGender(gender) {
                this.selectedGender = gender;
                this.registerUser[0].description = gender;
            },

            next() {
                if (this.active++ > 2) this.active = 0;
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
  textarea{
    resize: none;
  }
</style>
