<template>
  <section id="contact">
        <div class="container mt-5">
            <h1 class="text-warning text-center text-uppercase border-bottom border-warning">contact</h1>
            <div class="row mt-5" :class="{'animate__animated': animated, 'animate__slideInUp': animated}">
                <div class="col-md-6 order-md-1">
                    <img src="../../../assets/image/contact.png" class="w-100" alt="">
                </div>
                <div class="col-md-6 order-md-0">
                    <form >
                        <div class="mb-3 mt-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="Message">Message</label>
                            <textarea class="form-control" rows="3" id="comment" name="text"
                                placeholder="Enter message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-shop">Send</button>
                    </form>
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
#contact{
  overflow: hidden;

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
.btn:not(.nav-btns button){
  background-color: #fff;
  color: rgb(85, 85, 85);
  padding: 10px 16px;
  border-radius: 25px;
  border: 1px solid rgb(85, 85, 85);
}
.btn:not(.nav-btns button):hover{
background-color: #ffc800;
color: #fff;
border-color: #ffc800;
}
.animate__animated {
  animation-duration: 1s;
}


</style>