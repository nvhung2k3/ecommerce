<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <template v-if="isDesktop">
      <swiper-slide class="d-flex">
        <div class="container d-flex">
          <div class="row">
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-1.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-2.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-3.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="d-flex">
        <div class="container d-flex">
          <div class="row">
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-1.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-2.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/team-3.jpg" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="d-flex">
        <div class="container d-flex">
          <div class="row">
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/c-1.jpg" class="w-100 h-100" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/c-2.jpg" class="w-100 h-100" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box-area text-center">
                <div class="img-area">
                  <img src="../../assets/image/c-3.jpg" class="w-100 h-100" alt="" />
                </div>
                <h5>Person's name</h5>
                <span>Designation Goes Here</span>
                <p class="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <h6 class="socials">
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star px-1 checked"></i>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </template>
    <template v-else>
      <!-- Hiển thị 1 ảnh trên mobile -->
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/team-1.jpg" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/team-2.jpg" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/team-3.jpg" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/team-4.jpg" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/c-1.jpg" class="w-100 h-100" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/c-2.jpg" class="w-100 h-100" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex">
        <div class="container">
          <div class="box-area text-center">
            <div class="img-area">
              <img src="../../assets/image/c-3.jpg" class="w-100 h-100" alt="" />
            </div>
            <h5>Person's name</h5>
            <span>Designation Goes Here</span>
            <p class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <h6 class="socials">
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star px-1 checked"></i>
            </h6>
          </div>
        </div>
      </swiper-slide>
      
    </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      isDesktop: true,
    };
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768;
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.isDesktop = window.innerWidth >= 768;
    },
  },
};
</script>
<style scoped>
@media (max-width: 767px) {
  .swiper-slide {
    width: 100%;
  }
}
.box-area {
  padding: 30px;
  position: relative;
  display: block;
  background: #fff;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 40px 0;
}
.box-area h5 {
  font-size: 16px;
  font-weight: 700;
  color: #0a69ed;
  margin-top: 30px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.box-area span {
  color: #262626;
  display: block;
  font-size: 13px;
  margin: 0 0 10px;
  font-weight: 400;
}
.box-area .content {
  color: #262626;
}
.box-area .img-area {
  width: 90px;
  height: 90px;
  position: absolute;
  top: -40px;
  left: 0;
  bottom: 0;
  margin: 0 auto;
  right: 0;
  z-index: 1;
  border: 5px solid #fff;
  border-radius: 50%;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
}
.box-area .img-area img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.socials {
  margin-top: 30px;
}
.checked{
  color: #ffc800;
}
</style>
