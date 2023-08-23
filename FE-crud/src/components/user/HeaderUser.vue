<template>

  <nav class="navbar navbar-expand-lg p-0 sticky-top w-100">
    <div class="container-fluid">
      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class=""
          ><img
            src="../../assets/image/menu.png"
            style="width: 24px; height: 24px"
            alt=""
        /></span>
      </button>

      <router-link class="navbar-brand text-white" :to="{ name: 'user-home' }"
        ><Span class="text-warning">E</Span> Lectronic
        <span class="text-warning">Shop</span></router-link
      >
      <li class="nav-item d-lg-none d-block position-relative">
        <a
          class="nav-item text-white"
          data-bs-toggle="offcanvas" data-bs-target="#demo"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.15562 7.60015C4.34117 7.60015 3.69863 8.29268 3.75954 9.10485L4.58454 20.1049C4.63933 20.8354 5.24804 21.4001 5.98062 21.4001H18.0194C18.752 21.4001 19.3607 20.8354 19.4155 20.1049L20.2405 9.10485C20.3014 8.29268 19.6588 7.60015 18.8444 7.60015H5.15562ZM2.5629 9.1946C2.44978 7.68628 3.64307 6.40015 5.15562 6.40015H18.8444C20.3569 6.40015 21.5502 7.68629 21.4371 9.1946L20.6121 20.1946C20.5104 21.5513 19.3799 22.6001 18.0194 22.6001H5.98062C4.62011 22.6001 3.48965 21.5513 3.3879 20.1946L2.5629 9.1946Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.6 9.00049C7.6 9.00037 7.6 9.00026 7.6 9.00015L7.60001 8.99847L7.60011 8.98698C7.60024 8.97611 7.6005 8.95891 7.60105 8.93581C7.60215 8.8896 7.6044 8.81985 7.60899 8.72994C7.61817 8.54994 7.63668 8.29013 7.67392 7.97732C7.74876 7.34862 7.89753 6.52101 8.19005 5.70195C8.48378 4.87951 8.91003 4.10068 9.51877 3.53253C10.114 2.977 10.9063 2.60015 12 2.60015C13.0937 2.60015 13.886 2.977 14.4812 3.53253C15.09 4.10068 15.5162 4.87951 15.81 5.70195C16.1025 6.52101 16.2512 7.34862 16.3261 7.97732C16.3633 8.29013 16.3818 8.54994 16.391 8.72994C16.3956 8.81985 16.3979 8.8896 16.399 8.93581C16.3995 8.95891 16.3998 8.97611 16.3999 8.98698L16.4 8.99847L16.4 9.00015C16.4 9.00026 16.4 9.00037 16.4 9.00049M7 9.00015C6.4 9.00015 6.4 8.99991 6.4 8.99965L6.4 8.99899L6.40001 8.99718L6.40003 8.99167L6.40019 8.97315C6.40037 8.95753 6.40072 8.93542 6.40139 8.90725C6.40273 8.85092 6.40537 8.77029 6.41055 8.66879C6.42089 8.46597 6.44145 8.17892 6.48233 7.83547C6.56374 7.15167 6.72748 6.22929 7.05996 5.29834C7.39123 4.37078 7.90247 3.39961 8.69999 2.65526C9.51102 1.89829 10.5937 1.40015 12 1.40015C13.4063 1.40015 14.489 1.89829 15.3 2.65526C16.0975 3.39961 16.6088 4.37078 16.94 5.29834C17.2725 6.22929 17.4363 7.15167 17.5177 7.83547C17.5586 8.17892 17.5791 8.46597 17.5895 8.66879C17.5946 8.77029 17.5973 8.85092 17.5986 8.90725C17.5993 8.93542 17.5996 8.95753 17.5998 8.97315L17.6 8.99167L17.6 8.99718L17.6 8.99899V8.99965C17.6 8.99991 17.6 9.00015 17 9.00015"
              fill="white"
            /></svg
        ></a>
      <i class="fa-solid fa-circle quantity text-danger position-absolute" ><span class="position-absolute text-black text-quantity ">2</span></i>
      </li>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item p-md-2">
            <router-link
              class="nav-link text-white nav-link-boder"
              :to="{ name: 'user-home' }"
              :class="{ active: $route.name === 'user-home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item p-md-2">
            <router-link
              class="nav-link text-white nav-link-boder"
              :to="{ name: 'user-product' }"
              :class="{ active: $route.name === 'user-product' }"
              >Categories</router-link
            >
          </li>
          <li class="nav-item p-md-2">
            <router-link
              class="nav-link text-white nav-link-boder"
              :to="{ name: 'user-about' }"
              :class="{ active: $route.name === 'user-about' }"
              >About</router-link
            >
          </li>
          <li class="nav-item p-md-2">
            <router-link
              class="nav-link text-white nav-link-boder"
              :to="{ name: 'user-contact' }"
              :class="{ active: $route.name === 'user-contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
           <li class="nav-item p-lg-3 py-2 cart d-none d-lg-block position-relative">
            <a  class="nav-item text-white "
                 data-bs-toggle="offcanvas" data-bs-target="#demo"><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.15562 7.60015C4.34117 7.60015 3.69863 8.29268 3.75954 9.10485L4.58454 20.1049C4.63933 20.8354 5.24804 21.4001 5.98062 21.4001H18.0194C18.752 21.4001 19.3607 20.8354 19.4155 20.1049L20.2405 9.10485C20.3014 8.29268 19.6588 7.60015 18.8444 7.60015H5.15562ZM2.5629 9.1946C2.44978 7.68628 3.64307 6.40015 5.15562 6.40015H18.8444C20.3569 6.40015 21.5502 7.68629 21.4371 9.1946L20.6121 20.1946C20.5104 21.5513 19.3799 22.6001 18.0194 22.6001H5.98062C4.62011 22.6001 3.48965 21.5513 3.3879 20.1946L2.5629 9.1946Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.6 9.00049C7.6 9.00037 7.6 9.00026 7.6 9.00015L7.60001 8.99847L7.60011 8.98698C7.60024 8.97611 7.6005 8.95891 7.60105 8.93581C7.60215 8.8896 7.6044 8.81985 7.60899 8.72994C7.61817 8.54994 7.63668 8.29013 7.67392 7.97732C7.74876 7.34862 7.89753 6.52101 8.19005 5.70195C8.48378 4.87951 8.91003 4.10068 9.51877 3.53253C10.114 2.977 10.9063 2.60015 12 2.60015C13.0937 2.60015 13.886 2.977 14.4812 3.53253C15.09 4.10068 15.5162 4.87951 15.81 5.70195C16.1025 6.52101 16.2512 7.34862 16.3261 7.97732C16.3633 8.29013 16.3818 8.54994 16.391 8.72994C16.3956 8.81985 16.3979 8.8896 16.399 8.93581C16.3995 8.95891 16.3998 8.97611 16.3999 8.98698L16.4 8.99847L16.4 9.00015C16.4 9.00026 16.4 9.00037 16.4 9.00049M7 9.00015C6.4 9.00015 6.4 8.99991 6.4 8.99965L6.4 8.99899L6.40001 8.99718L6.40003 8.99167L6.40019 8.97315C6.40037 8.95753 6.40072 8.93542 6.40139 8.90725C6.40273 8.85092 6.40537 8.77029 6.41055 8.66879C6.42089 8.46597 6.44145 8.17892 6.48233 7.83547C6.56374 7.15167 6.72748 6.22929 7.05996 5.29834C7.39123 4.37078 7.90247 3.39961 8.69999 2.65526C9.51102 1.89829 10.5937 1.40015 12 1.40015C13.4063 1.40015 14.489 1.89829 15.3 2.65526C16.0975 3.39961 16.6088 4.37078 16.94 5.29834C17.2725 6.22929 17.4363 7.15167 17.5177 7.83547C17.5586 8.17892 17.5791 8.46597 17.5895 8.66879C17.5946 8.77029 17.5973 8.85092 17.5986 8.90725C17.5993 8.93542 17.5996 8.95753 17.5998 8.97315L17.6 8.99167L17.6 8.99718L17.6 8.99899V8.99965C17.6 8.99991 17.6 9.00015 17 9.00015"
                  fill="white"
                /></svg
            >
            </a>
            <i class="fa-solid fa-circle quantity text-danger position-absolute"><span class="position-absolute text-black text-quantity ">2</span></i>
          </li>
          <li class="nav-item py-md-2">
            <router-link
              class="nav-link text-white cart"
              :to="{ name: 'user-login' }"
              ><i class="fa-solid fa-user"></i> Login</router-link
            >
          </li>

          <li class="nav-item py-md-2">
            <div
              class="dark-moon"
              @click="toggleTheme"
              :style="{ backgroundColor: themeColor }"
            >
              <span class="text-white">{{ buttonText }}</span>
              <img :src="iconSrc" alt="" id="btn-icon" />
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <carts/>
</template>

<script>
import Carts from './Carts.vue';
export default {
  components:{
    Carts
  },
  data() {
    return {
      isDarkTheme: false,
      tab: "home",
    };
  },

  computed: {
    themeColor() {
      return this.isDarkTheme ? "#000" : "#ffc800";
    },
    buttonText() {
      return this.isDarkTheme ? "Dark" : "Light";
    },
    iconSrc() {
      return this.isDarkTheme
        ? "../../../src/assets/image/moon.png"
        : "../../../src/assets/image/sun.png";
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.classList.toggle("dark-theme");
    },
  },
};
</script>

<style>
body {
  background-color: white;
  transition: background-color 0.8s, color 0.8s;
}
.dark-moon {
  display: flex;
  align-items: center;
  background-color: #ffc800;
  padding: 8px;
  border-radius: 25px;
  width: 80px;
  cursor: pointer;
}
.dark-theme {
  background-color: #000;
  color: white;
  transition: background-color 0.8s, color 0.8s;
}
.dark-moon img {
  width: 20px;
  margin-left: 10px;
}

.navbar {
  background-color: rgb(67 0 86);
}
.navbar-nav .nav-item .nav-link:hover {
  color: #ffc800 !important;
  border-bottom-color: #ffc800;
}
.nav-link-boder {
  border: 1px solid transparent;
}
.nav-item .active {
  color: #ffc800 !important;
  border-bottom-color: #ffc800;
}
.cart{
  cursor: pointer;
}
.quantity{
  top: 17%;
  right: 17%;
}
.text-quantity{
  font-size: 10px;
   top: 20%;
  right: 25%;
}
@media (max-width: 991px) {
  .cart {
    border-top: 1px solid #ffc800 !important;
  }
  .navbar-nav .nav-item .nav-link:hover {
    border: none;
  }
  .nav-link-boder {
    border: none;
  }
  .quantity{
    top: 0;
    right: -10%;
  }
}
</style>
