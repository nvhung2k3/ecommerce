<template>
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-lg-2 ">
        <div class="sticky ">
          <h3>Categories</h3>
          <ul class="p-0">
            <li>
              <div class="wrapper  border-0 border-bottom bg-white w-100 text-start text-black">
                  <h5>Price range</h5>
                <div class="slider">
                  <div class="progress"></div>
                </div>
                <div class="range-input">
                  <input
                    type="range"
                    class="range-min cursor"
                    min="0"
                    max="10000"
                    value="0"
                    step="100"
                  />
                  <input
                    type="range"
                    class="range-max cursor"
                    min="0"
                    max="10000"
                    value="10000"
                    step="100"
                  />
                </div>
                <div class="price-input">
                  <div class="field">
                    <input type="number" class="input-min text-black m-0 " value="0" />
                  </div>
                  <div class="separator"><i class="fa-solid fa-minus"></i></div>
                  <div class="field">
                    <input type="number" class="input-max text-black m-0" value="10000" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              
              <button
                class="py-2 h5 border-0 border-bottom bg-white w-100 text-start text-black  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Trending <i class="fa-solid fa-chevron-down "></i>
              </button>
              <ul class="collapse ps-4" id="collapseExample">
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Iphone</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Airpods</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Laptop</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Ipad</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Smart
                    Watch</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> PC
                    Moniter</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Headphone</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <button
                class="py-2 h5 border-0 border-bottom bg-white w-100 text-start text-black d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Discount <i class="fa-solid fa-chevron-down "></i>
              </button>
              <ul class="collapse ps-4" id="collapseExample1">
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Iphone</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Airpods</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Laptop</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Ipad</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Smart
                    Watch</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> PC
                    Moniter</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Headphone</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <button
                class="py-2 h5 border-0 border-bottom bg-white w-100 text-start text-black d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
              Smart devices <i class="fa-solid fa-chevron-down "></i>
              </button>
              <ul class="collapse ps-4" id="collapseExample2">
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Iphone</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Airpods</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Laptop</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Ipad</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Smart
                    Watch</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> PC
                    Moniter</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Headphone</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <button
                class="py-2 h5 border-0 border-bottom bg-white w-100 text-start text-black d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
              Electronice device <i class="fa-solid fa-chevron-down "></i>
              </button>
              <ul class="collapse ps-4" id="collapseExample3">
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Iphone</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Airpods</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Laptop</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Ipad</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Smart
                    Watch</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> PC
                    Moniter</a
                  >
                </li>
                <li class="py-2">
                  <a class="text-black" href="#"
                    ><span class="fa fa-chevron-right mr-2"></span> Headphone</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="container-fluid">
          <div class="row mb-4 d-flex align-items-center">
            <div class="col-lg-4 col-12 mb-3">
              <form class="form-inline d-flex">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-cart ms-1" type="submit">Search</button>
              </form>
            </div>
            <div class="col-lg-5 col-12 mb-3">
              <ul class="list-group d-flex flex-row">
                <li class=" ">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  Available
                </li>
                <li class="mx-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  Discount
                </li>
                <li class="">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  New Stock
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-12 mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Xếp theo : Mặc định</option>
                <option value="1">Xếp theo : Hottrend</option>
                <option value="2">Xếp theo : Giảm giá</option>
                <option value="3">Xếp theo : Độ hot</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 overflow-hidden"
              v-for="product in products"
              :key="product"
            >
            <router-link :to="{name :'products-detailproduct',params: { id: product.id } }">
              <div class="card mb-3">
                <img
                  :src="
                    'http://localhost:8000/storage//customer//' + product.image
                  "
                  class="card-img-top card-img"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">{{ product.name }}</h5>
                  <p class="card-text text-center description-column">{{ product.description }}</p>
                  <div class="text-center">
                    <i class="fa-solid fa-star px-1 checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star px-1 checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star px-1 checked"></i>
                  </div>
                  <div class="d-flex justify-content-center mt-3">
                    <span class="price">$ {{ product.price }}</span>
                  </div>
                </div>
              </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  mounted() {
    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right =
              100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  },
  methods: {
    getAllProducts() {
      this.$request.get("http://127.0.0.1:8000/api/products").then((res) => {
        this.products = res.data;
      });
    },
    
  },
});
</script>

<style scoped>

.sticky {
  position: sticky;
  top: 56px;
  overflow-y: auto;
  height: 90vh;
  
  }
  ::-webkit-scrollbar
  {
    display: none;
  }
  .card{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

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
  background-color: rgb(67 0 86) !important;
  color: white !important;
}
.btn-cart:hover {
  color: black !important;
  background-color: #ffc800 !important;
  transition: 0.7 ease;
}
.checked {
  color: #ffc800;
}
.icon:hover {
  color: #ffc800 !important;
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
  border-color: #ffc800;
}


.price-input {
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field {
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input {
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 19px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  --moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator {
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 2px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  left: 0%;
  right: 0%;
  position: absolute;
  border-radius: 5px;
  background: #000;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: white;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  border: 2px solid black;
}
input[type="range"]::-moz-range-thumb {
  height: 18px;
  width: 18px;
  border: none;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
.cursor{
  cursor: pointer;
}
.fa-dollar-sign{
  left: 10%;
}
.description-column {
    max-width: 100%; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  overflow: hidden;
  }
@media (max-width: 991px) {
  .sticky {
    height: auto;
  }
}
</style>
