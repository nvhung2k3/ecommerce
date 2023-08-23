<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-lg-5 my-3 d-flex align-items-center">
        <router-link class="nav-item nav-link" :to="{ name: 'user-product' }"
          >Back</router-link
        ><i class="fa-solid fa-chevron-right px-1"></i> {{ products.name }}
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 d-flex justify-content-center border">
        <div class="zoomer">
          <div class="image">
            <img :src="products.image" alt="" class="w-100" />
          </div>
          <div class="result hide"></div>
        </div>
      </div>
      <div class="col-md-6 border">
        <h3 class="mb-2">
          {{ products.name }}
        </h3>
        <div class="d-flex aling-items-center mb-2">
          <h4 class="m-0">Vote :</h4>
          <div class="d-flex align-items-center ms-1">
            <i class="fa-solid fa-star px-1 checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star px-1 checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star px-1 checked"></i>
          </div>
        </div>
        <p class="mb-2">Desc :{{ products.description }}</p>
        <h3 class="mb-2 text-danger">${{ products.price }}</h3>

        <div
          class="d-flex gap-lg-5 gap-3 justify-content-evenly justify-content-sm-start"
        >
          <button class="btn btn-danger">Buy now</button>
          <button class="btn btn-cart" @click="AddToCart()">
            <i class="fa-solid fa-cart-plus me-2"></i>Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        id: "",
        name: "",
        description: "",
        image: "",
        price: "",
        quantity: "",
      },
      value: 1,
    };
  },
  created() {
    let productId = this.$route.params.id;
    if (productId) {
      this.getProduct(productId);
    }
  },
  mounted() {
    const zoomer = document.querySelector(".zoomer");
    const wrapImg = document.querySelectorAll(".zoomer .image");
    const result = document.querySelector(".zoomer .result");

    const size = 4;

    wrapImg.forEach((item) => {
      item.addEventListener("mousemove", function (e) {
        result.classList.remove("hide");

        const img = item.querySelector("img");

        let x = (e.offsetX / this.offsetWidth) * 100;
        let y = (e.offsetY / this.offsetHeight) * 100;
        let posX = e.pageX - zoomer.offsetLeft;
        let posY = e.pageY - zoomer.offsetTop;

        result.style.cssText = `
			background-image: url(${img.src});
			background-size: ${img.width * size}px ${img.height * size}px;
			background-position : ${x}% ${y}%;
			left: ${posX}px;
			top: ${posY}px;`;
      });

      item.addEventListener("mouseleave", function (e) {
        result.style = ``;
        result.classList.add("hide");
      });
    });
  },
  methods: {
    getProduct(productId) {
      this.$request
        .get(`http://127.0.0.1:8000/api/show/${productId}`)
        .then((res) => {
          this.products = res.data;
          this.products.image = `http://localhost:8000/storage/customer/${this.products.image}`;
        });
    },
    AddToCart() {
      this.$swal
        .fire({
          position: "top-end",
          icon: "success",
          title: "Add Product success",
          showConfirmButton: false,
          timer: 1500,
        })
        .then((result) => {
          if (result.isConfirmed) {
          }
        });
    },
  },
};
</script>

<style scoped>
.btn-cart:hover {
  color: black !important;
  background-color: #ffc800 !important;
  transition: 0.7 ease;
}
.btn-cart {
  background-color: rgb(67 0 86) !important;
  color: white !important;
}
.checked {
  color: #ffc800;
}

.zoomer {
  position: relative;
  display: flex;
}

.zoomer .image {
  cursor: none;
}

.result {
  position: absolute;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hide {
  display: none;
}
</style>
