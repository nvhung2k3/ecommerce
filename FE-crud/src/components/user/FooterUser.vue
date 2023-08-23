<template>
  <footer id="footer">
        <div class="container mt-5">
            <div class="row pt-5">
                <div class="col-md-6 col-xl-3 text-white mb-3">
                    <h2 class="m-0 text-warning ">Electronic Shop</h2>
                    <ul class="p-0">
                        <li>Phone: +000000000000000</li>
                        <li>Email: electronicshop@.com</li>
                    </ul>
                </div>
                <div class="col-md-6 col-xl-3 text-white mb-3">
                    <h2 class="m-0 text-warning">Usefull Links</h2>
                    <ul class="p-0 list">
                        <li class="list-item"><router-link class="item-link" :to="{name :'user-home'}">Home</router-link> </li>
                        <li class="list-item"><router-link :to="{name:'user-product'}" class="item-link">Product</router-link></li>
                        <li class="list-item"><router-link :to="{name:'user-about'}" class="item-link">About</router-link></li>
                        <li class="list-item"><router-link :to="{name:'user-contact'}" class="item-link">Contact</router-link></li>
                    </ul>
                </div>
                <div class="col-md-6 col-xl-3 text-white mb-3">
                    <h2 class="m-0 text-warning">Our Services</h2>
                    <ul class="p-0">
                        <li class="list-item"><a href="" class="item-link">PS 5</a></li>
                        <li class="list-item"><a href="" class="item-link">Computer</a></li>
                        <li class="list-item"><a href="" class="item-link">Gaming Laptop</a></li>
                        <li class="list-item"><a href="" class="item-link">Mobile Phone</a></li>
                        <li class="list-item"><a href="" class="item-link">Gaming Gadget</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-xl-3 text-white mb-3">
                    <h2 class="m-0 text-warning">Our Social Networks</h2>
                    <div>
                        <i class="fa-brands fa-facebook icon"></i>
                        <i class="fa-brands fa-tiktok ms-3 icon"></i>
                        <i class="fa-brands fa-twitter ms-3 icon"></i>
                        <i class="fa-brands fa-linkedin ms-3 icon"></i>
                    </div>
                    <form class="form-inline d-flex mt-3">
      <input class="form-control " type="text" placeholder="Comment" aria-label="Search">
      <button class="btn btn-outline-success ms-2" type="submit">Search</button>
    </form>
                </div>
            </div>
        </div>
    </footer>
   <a href="#" class="arrow" v-show="showArrow" @click="scrollToTop"><i><img src="../../assets/image/arrow.png" alt=""></i></a>
    <div class="fui-button-call">
        <a class="social-link" title="0123456789">
            <div class="icon-call">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
            </div>
            <span class="text">0123456789</span>
        </a>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      showArrow: false
    }
  },
   created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.showArrow = true;
      } else {
        this.showArrow = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
#footer{
  margin-top: 100px;
  background-color: rgb(67 0 86);
}
.icon:hover{
  color: #ffc800 !important;
  cursor: pointer;
}
.list-item .item-link{
  text-decoration: none;
  color: white;
}
.list-item .item-link:hover{
  color: #ffc800;
}
.fui-button-call {
  position: fixed;
    bottom: 50px;
    right: 46px;
    text-decoration: none;
    text-align: center;
    line-height: 50px;
    z-index: 1000;

}
.social-link{
  text-decoration: none;

}
.fui-button-call:hover .social-link {
  width: 200px;
}
.fui-button-call:hover .text {
  display: block;
  color: #f43f5e;
}
.fui-button-call:hover .icon-call {
  color: #fff;
  background-color: #f43f5e;
}
.fui-button-call .social-link {
  display: flex;
  flex-wrap: wrap;
  width: 60px;
  height: 60px;
  border-radius: 100rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  overflow: hidden;
  cursor: pointer;
}
.fui-button-call .icon-call {
  width: 60px;
  height: 60px;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
  transition: all 0.3s ease-out;
  border: 1px solid rgba(0, 0, 0, 0);
  animation: turnCircle 1s linear infinite alternate;
  background-color: #fff;
  position: relative;
  color: #f43f5e;
}
.fui-button-call .icon-call svg {
  height: 26px;
}
.fui-button-call .text {
  font-size: 20px;
  font-weight: 600;
  line-height: 60px;
  margin-left: 10px;
  letter-spacing: 1px;
  transition: all 0.3s ease-out;
}
@keyframes turnCircle {
  100% {
    transform: rotate(45deg);
  }
}
.arrow{
  position: fixed;
    width: 50px;
    height: 50px;
    bottom: 120px;
    right: 55px;
    text-decoration: none;
    text-align: center;
    line-height: 50px;
    z-index: 1000;
}
</style>