<template>
  <!-- products -->
    <section id="products">
        <div class="container">
            <div class="row mt-4">
                <div class="col-md-6 col-lg-4 col-xl-3" v-for="product in products" :key="product">
                    <div class="card mb-3">
                        <img  :src="'http://localhost:8000/storage//customer//' + product.image" class="card-img-top card-img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{product.name}}</h5>
                            <p class="card-text text-center description-column">{{product.description}}</p>
                            <div class="text-center">
                                <i class="fa-solid fa-star px-1 checked"></i>
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star px-1 checked"></i>
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star px-1 checked"></i>
                            </div>
                            <div class="d-flex justify-content-center mt-3">
                                <span class="price">$ {{product.price}}</span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!--end products -->


</template>

<script>
export default {
data() {
    return {
        products:[]
    }
},
created(){
    this.getAllProducts();
},
methods: {
    getAllProducts(){
        this.$request.get("http://127.0.0.1:8000/api/products").then((res)=>{
            this.products = res.data
        });
    }
},
}
</script>

<style scoped>
#products {
  margin-top: 56px;
}
.card .card-img {
  transition: transform 0.2s;
  cursor: pointer;
}
.card .card-img:hover {
  transform: scale(1.2);
}
.price {
  font-size: 20px;
  font-weight: bold;
}
.btn-cart {
  background-color:  rgb(67 0 86) !important;
  color: white !important;
}
.btn-cart:hover {
  color: black !important;
  background-color: #ffc800 !important;
  transition: 0.7 ease;
}
.checked{
  color: #ffc800;
}
.icon:hover{
  color: #ffc800 !important;
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
.description-column {
    max-width: 100%; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  overflow: hidden;
  }
</style>