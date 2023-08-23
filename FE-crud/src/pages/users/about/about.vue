<template>
   <section id="about">
        <div class="container pt-5" >
            <div class="row" :class="{'animate__animated': animated, 'animate__slideInRight': animated}">
                <div class="col-md-6">
                    <img src="../../../assets/image/about.png" class="img-fluid" alt="">
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <div class="about-title ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo architecto sequi
                            mollitia inventore hic, a eaque modi esse magnam itaque quasi reprehenderit, debitis non
                            iusto sunt doloribus minima error?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo architecto sequi
                            mollitia inventore hic, a eaque modi esse magnam itaque quasi reprehenderit, debitis non
                            iusto sunt doloribus minima error?</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <h1 class="text-warning text-center text-uppercase border-bottom border-warning mb-5">Team work</h1>
                <div class="col-md-6 col-lg-4 col-xl-3 text-center">
                    <div class="box-area">
                        <div class="img-area">
                            <img src="../../../assets/image/team-1.jpg" alt="">
                        </div>
                        <h5>Person's name</h5>
                        <span>Designation Goes Here</span>
                        <div>
                            <i class="fa-brands fa-facebook icon"></i>
                            <i class="fa-brands fa-tiktok ms-3 icon"></i>
                            <i class="fa-brands fa-twitter ms-3 icon"></i>
                            <i class="fa-brands fa-linkedin ms-3 icon"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 text-center">
                    <div class="box-area">
                        <div class="img-area">
                            <img src="../../../assets/image/team-2.jpg" alt="">
                        </div>
                        <h5>Person's name</h5>
                        <span>Designation Goes Here</span>
                        <div>
                            <i class="fa-brands fa-facebook icon"></i>
                            <i class="fa-brands fa-tiktok ms-3 icon"></i>
                            <i class="fa-brands fa-twitter ms-3 icon"></i>
                            <i class="fa-brands fa-linkedin ms-3 icon"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 text-center">
                    <div class="box-area">
                        <div class="img-area">
                            <img src="../../../assets/image/team-3.jpg" alt="">
                        </div>
                        <h5>Person's name</h5>
                        <span>Designation Goes Here</span>
                        <div>
                            <i class="fa-brands fa-facebook icon"></i>
                            <i class="fa-brands fa-tiktok ms-3 icon"></i>
                            <i class="fa-brands fa-twitter ms-3 icon"></i>
                            <i class="fa-brands fa-linkedin ms-3 icon"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 text-center">
                    <div class="box-area">
                        <div class="img-area">
                            <img src="../../../assets/image/team-4.jpg" alt="">
                        </div>
                        <h5>Person's name</h5>
                        <span>Designation Goes Here</span>
                        <div>
                            <i class="fa-brands fa-facebook icon"></i>
                            <i class="fa-brands fa-tiktok ms-3 icon"></i>
                            <i class="fa-brands fa-twitter ms-3 icon"></i>
                            <i class="fa-brands fa-linkedin ms-3 icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer-user/>
</template>

<script>
import FooterUser from '../../../components/user/FooterUser.vue'
export default {
  components:{
    FooterUser
  },
  data() {
    return {
       animated: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.animated = true;
    }, 1000); 
   
  },
}
</script>

<style scoped>
#about{
    overflow: hidden;

}
.icon:hover{
  color: #ffc800 !important;
  cursor: pointer;
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
.about-title{
  text-align: justify;
}
.animate__slideInRight{
  animation-name: slideInRight;
}
@media (max-width:991px) {
  
  
}

</style>