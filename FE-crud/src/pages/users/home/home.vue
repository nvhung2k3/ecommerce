<template>
  <!-- home content -->
    <section id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center" :class="{'animate__animated': animated, 'animate__fadeInLeft': animated}">
          <div class="home-content">
            <p class="text-color p-0 m-0">Electronic Products</p>
            <p class="text-color p-0 m-0">Up To <span class="text-warning">50%</span> Off</p>
            <p class="w-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
              Lorem ipsum dolor sit amet consectetur.</p>
            <button class="btn btn-shop">Shop now</button>
          </div>
        </div>
        <div class="col-md-6" :class="{'animate__animated': animated, 'animate__fadeInRight': animated}">
          <img src="../../../assets/image/background.png" class="w-100" alt="">
        </div>
      </div>
    </div>
  </section>
    <!-- end home content -->
  <!-- products -->
    <products/>
  <!--end products -->
  <!-- other product -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 py-3 py-md-0">
                    <div class="card mb-3">
                        <img class="card-img-top w-100" src="../../../assets/image/c1.png" alt="Card image">
                        <div class="card-img-overlay">
                            <h4 class="card-title fs-1">Best Laptop</h4>
                            <p class="card-text m-1">Latest Collection</p>
                            <p class="card-text m-1">Up To 50% Off</p>
                            <button class="btn btn-shop mt-3">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 py-3 py-md-0">
                    <div class="card mb-3">
                        <img class="card-img-top w-100" src="../../../assets/image/c2.png" alt="Card image">
                        <div class="card-img-overlay">
                            <h4 class="card-title fs-1">Best Headphone</h4>
                            <p class="card-text m-1">Latest Collection</p>
                            <p class="card-text m-1">Up To 50% Off</p>
                            <button class="btn btn-shop mt-3">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end other product -->
     <section id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center" :class="{'animate__animated': animated, 'animate__fadeInLeft': animated}">
          <div class="home-content">
            <p class="text-color p-0 m-0">Electronic Products</p>
            <p class="text-color p-0 m-0">Up To <span class="text-warning">50%</span> Off</p>
            <p class="w-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
              Lorem ipsum dolor sit amet consectetur.</p>
            <button class="btn btn-shop">Shop now</button>
          </div>
        </div>
        <div class="col-md-6" :class="{'animate__animated': animated, 'animate__fadeInRight': animated}">
          <img src="../../../assets/image/image1.png" class="w-100" alt="">
        </div>
      </div>
    </div>
  </section>
 <section id="category">
        <div class="container mt-5">
            <h1 class="text-warning text-center text-uppercase border-bottom border-warning mb-sm-5">Category Products</h1>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <img class="card-img-top w-100" src="../../../assets/image/c3.png" alt="Card image">
                        <div class="card-img-overlay text-center">
                            <h2 class="card-title text-white">Home Gadget</h2>
                            <p class="card-text text-white fs-3">Latest collection Up To 50% Off</p>
                            <button class="btn btn-shop more px-4">More</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <img class="card-img-top w-100" src="../../../assets/image/c4.png" alt="Card image">
                        <div class="card-img-overlay text-center">
                            <h2 class="card-title text-white">Gaming Gadget</h2>
                            <p class="card-text text-white fs-3">Latest collection Up To 50% Off</p>
                            <button class="btn btn-shop px-4">More</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <img class="card-img-top w-100" src="../../../assets/image/c5.png" alt="Card image">
                        <div class="card-img-overlay text-center">
                            <h2 class="card-title text-white">Electronic Gadget</h2>
                            <p class="card-text text-white fs-3">Latest collection Up To 50% Off</p>
                            <button class="btn btn-shop px-4">More </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <categories/>
    <section id="testimonial_area" class="section_padding">
        <div class="container mt-5">
            <h1 class="text-warning text-center text-uppercase border-bottom border-warning"> Recommended Reviews
            </h1>
            <div class="row mt-5">
                 <comments/>
            </div>
        </div>
    </section>

    <section id="offer">
        <div class="container mt-5">
            <h1 class="text-warning text-center text-uppercase border-bottom border-warning">working</h1>
            <div class="row mt-5 ">
                <div class="col-lg-3 col-6 text-center mb-3">
                    <i class="fa-solid fa-cart-shopping fs-1"></i>
                    <p class="m-0">Free Shipping</p>
                    <p class="m-0">On order over $1000</p>
                </div>
                <div class="col-lg-3 col-6 text-center mb-3">
                    <i class="fa-solid fa-rotate-left fs-1"></i>
                    <p class="m-0">Free Returns</p>
                    <p class="m-0">Within 30 days</p>
                </div>
                <div class="col-lg-3 col-6 text-center mb-3">
                    <i class="fa-solid fa-truck-fast fs-1"></i>
                    <p class="m-0">Fast Delivery</p>
                    <p class="m-0">World Wide</p>
                </div>
                <div class="col-lg-3 col-6 text-center mb-3">
                    <i class="fa-solid fa-thumbs-up fs-1"></i>
                    <p class="m-0">Big choice</p>
                    <p class="m-0">Of products</p>
                </div>

            </div>
        </div>
    </section>
    <footer-user/>
   

    
</template>

<script>
import Categories from '../../../components/user/Categories.vue';
import Comments from '../../../components/user/Comments.vue';
import FooterUser from '../../../components/user/FooterUser.vue';
import Products from '../../../components/user/Products.vue';

export default {
  components:{
    Products,Categories,Comments,FooterUser
  },
  data() {
    return {
      animated: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.animated = true;
    }, 1000); 
  }
}
</script>

<style scoped>
#home {
  background-color: #a9a9a92b;
  overflow-x: hidden;

}
.text-color {
  color:  rgb(67 0 86) !important;
  font-size: 55px;
}
.btn-shop {
  background-color:  rgb(67 0 86) !important;
  color: white !important;
}
.btn-shop:hover {
  color: black !important;
  background-color: #ffc800 !important;
  transition: 0.7 ease;
  cursor: pointer;

}
.card {
  position: relative;
  overflow: hidden;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-img-overlay {
  opacity: 1;
}

.card-img-overlay .card-title,
.card-img-overlay .card-text,
.card-img-overlay .btn {
    transform: translateY(-100%);
    transition: transform 0.3s;
}
.card:hover .card-img-overlay .card-title,
.card:hover .card-img-overlay .card-text,
.card:hover .card-img-overlay .btn {
    transform: none;
    transition: transform 0.3s;
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
@media (max-width: 991px){

}
</style>