<template>
  <section id="register">
    <div class="container">
      <div class="row pt-5">
        <div
          class="col-md-6 "
          :class="{
            animate__animated: animated,
            animate__fadeInLeft: animated,
          }"
        >
          <img src="../../assets/image/register.png" class="img-fluid" alt="" />
        </div>
        <div
          class="col-md-6"
          :class="{
            animate__animated: animated,
            animate__fadeInRight: animated,
          }"
        >
          <h2 class="text-center text-warning">Register</h2>
          <form
            class="shadow p-3 mb-5 bg-body rounded"
            @submit.prevent="save()"
          >
            <div class="mb-3 mt-3">
              <label for="name" class="form-label text-black">Name</label>
              <input
                type="text"
                class="form-control"
                id="text"
                placeholder="Enter name"
                name="name"
                v-model="users.name"
                :class="{ 'is-invalid': errors.name }"
                @blur="validate()"
              />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label text-black">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                v-model="users.email"
                :class="{ 'is-invalid': errors.email }"
                @blur="validate()"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="password" class="form-label text-black"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                name="password"
                v-model="users.password"
                :class="{ 'is-invalid': errors.password }"
                @blur="validate()"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="password" class="form-label text-black"
                >Password Confirm</label
              >
              <input
                type="password"
                class="form-control"
                placeholder="Enter password confirm"
                name="password"
                v-model="users.passwordConfirm"
                :class="{ 'is-invalid': errors.passwordConfirm }"
                @blur="validate()"
              />
              <div class="invalid-feedback">{{ errors.passwordConfirm }}</div>
            </div>
            <div class="mb-3 mt-3">
              <VueClientRecaptcha
                class="d-flex align-items-center cursor"
                :value="inputValue"
                @getCode="getCaptchaCode"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Enter code"
                :class="{ 'is-invalid': errors.captcha }"
                @blur="validate()"
                v-model="users.captcha"
              />
              <div class="invalid-feedback">{{ errors.captcha }}</div>
            </div>
            <div class="d-flex gap-5 justify-content-center">
              <button type="submit" class="btn btn-shop px-4">Register</button>
            </div>
            <div
              class="d-flex justify-content-center align-items-center mt-3 w-100"
            >
              <p class="p-0 m-0 text-black">Do you already have an account ?</p>
              <i class="fa-solid fa-arrow-right text-black me-4 ms-2"></i>
              <router-link
                :to="{ name: 'user-login' }"
                class="btn btn-shop px-4"
                >Login</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer-user />
</template>

<script>
import VueClientRecaptcha from "vue-client-recaptcha";
import { ref } from "vue";
import FooterUser from "./FooterUser.vue";
export default {
  components: {
    VueClientRecaptcha,
    FooterUser,
  },
  setup() {
    const inputValue = ref(null);
    const captchaCode = ref("");
    const getCaptchaCode = (value) => {
      /* you can access captcha code */
      captchaCode.value = value;
    };

    return {
      inputValue,
      captchaCode,
      getCaptchaCode,
    };
  },
  data() {
    return {
      users: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        captcha: "",
        
      },
      errors: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        captcha: "",
      },
      animated: true,
    };
  },
  methods: {
    mounted() {
      setTimeout(() => {
        this.animated = true;
      }, 1000);
    },
    validate() {
      let isValid = true;
      this.errors = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        captcha: "",
      };
      if (!this.users.name ) {
        this.errors.name = "Name is required";
        isValid = false;
      } else if(this.users.name.length < 6 ){
        this.errors.name ="Minimum name 6 characters"
      }

      if (!this.users.email) {
        this.errors.email = "Email is required";
        isValid = false;
      } else if (!this.isEmail(this.users.email)) {
        this.errors.email = "Please enter the correct email";
      }
      if (!this.users.password) {
        this.errors.password = "Password is required";
        isValid = false;
      } else if (!this.isPassword(this.users.password)) {
        this.errors.password = "Did not enter the correct password";
      }

      if (!this.users.password) {
        this.errors.passwordConfirm = "PasswordConfirm is required";
        isValid = false;
      } else if (!this.users.passwordConfirm) {
        this.errors.passwordConfirm = "PasswordConfirm is required";
        isValid = false;
      } else if (this.users.passwordConfirm !== this.users.password) {
        this.errors.passwordConfirm = "Password re-entered is not correct";
        isValid = false;
      }
      if (!this.users.captcha) {
        this.errors.captcha = "Captcha is required";
        isValid = false;
      } else if (this.users.captcha !== this.captchaCode) {
        this.errors.captcha = "Captcha is not correct";
        isValid = false;
      }
      return isValid;
    },
    isEmail(value) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    isPassword(value) {
      return /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,20}$/.test(value);
    },
    
    save() {
      if (this.validate()) {
        console.log(this.users);
      }
    },
  },
};
</script>

<style scoped>
#register {
  overflow: hidden;
}
.cursor{
cursor: pointer;
} 
.btn-shop {
  background-color: rgb(67 0 86) !important;
  color: white !important;
}
.btn-shop:hover {
  color: black !important;
  background-color: #ffc800 !important;
  transition: 0.7 ease;
  cursor: pointer;
}
.btn:not(.nav-btns button) {
  background-color: #fff;
  color: rgb(85, 85, 85);
  padding: 10px 16px;
  border-radius: 25px;
  border: 1px solid rgb(85, 85, 85);
}
.btn:not(.nav-btns button):hover {
  background-color: #ffc800;
  color: #fff;
  border-color: #ffc800;
}
.animate__animated {
  animation-duration: 1s;
}

.animate__fadeInLeft {
  animation-name: fadeInLeft;
}

.animate__fadeInRight {
  animation-name: fadeInRight;
}
@media (max-width: 991px) {
  
}
</style>
