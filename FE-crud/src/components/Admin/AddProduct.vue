<template>
  <div class="container-fluid mt-5">
    <div class="col-12">
      <h3>
        Product 
        <router-link to="/admin/products" class="btn btn-primary float-end"
          ><i class="fa-solid fa-angle-left"></i> Back</router-link
        >
      </h3>
      <form
        class="row w-100 d-flex flex-column"
        @submit.prevent="save"
        enctype="multipart/form-data"
      >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name product"
            v-model="products.name"
            :class="{ 'is-invalid': errors.name }"
            @blur="validate()"
          />
          <div class="invalid-feedback">{{ errors.name }}</div>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Description</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="products.description"
            :class="{ 'is-invalid': errors.description }"
            @blur="validate()"
          ></textarea>
          <div class="invalid-feedback">{{ errors.description }}</div>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label"
            >Image Product</label
          >
          <input class="form-control" name="image" @change="onFileChange" type="file" id="image" />
          <div v-if="imagePreview">
    <img :src="imagePreview" alt="Product Image" style="height: 100px; width: 100px;">
  </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Price</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="products.price"
            :class="{ 'is-invalid': errors.price }"
            @blur="validate()"
          />
          <div class="invalid-feedback">{{ errors.price }}</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Quantity</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="products.quantity"
            :class="{ 'is-invalid': errors.quantity }"
            @blur="validate()"
          />
          <div class="invalid-feedback">{{ errors.quantity }}</div>
        </div>
        <div class="d-flex gap-3">
          <button type="submit" class="btn btn-primary">Save</button>
          <button class="btn btn-danger" @click.prevent="cancel()">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { render } from 'vue';
export default {
  name: "productadd",
  data() {
    return {
      products: {
        id:"",
        name: "",
        description: "",
        image: "",
        price: "",
        quantity: "",
      },
      errors: {
        name: "",
        description: "",
        price: "",
        quantity: "",
      },
      imagePreview: null,
      originalProducts: {},
    };
  },
  created() {
    let productId = this.$route.params.id;
    if (productId) {
      this.getProduct(productId);
    }
  },
  
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        name: "",
        description: "",
        price: "",
        quantity: "",
      };
      if (!this.products.name) {
        this.errors.name = "name is required";
        isValid = false;
      }
      if (!this.products.description) {
        this.errors.description = "description is required";
        isValid = false;
      }
      if (!this.products.price) {
        this.errors.price = "price is required";
        isValid = false;
      } else if (!this.isNumber(this.products.price)) {
        this.errors.price = "price is number";
        isValid = false;
      }
      if (!this.products.quantity) {
        this.errors.quantity = "quantity is required";
        isValid = false;
      } else if (!this.isNumber(this.products.quantity)) {
        this.errors.quantity = "quantity is number";
        isValid = false;
      }

      return isValid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    onFileChange(event){
      this.products.image = event.target.files[0];
      this.imagePreview = URL.createObjectURL(event.target.files[0]);
    }
    ,
    save() {
  if (this.validate()) {
    const formData = new FormData();

    formData.append('name', this.products.name);
    formData.append('description', this.products.description);
    formData.append('image', this.products.image);
    formData.append('price', this.products.price);
    formData.append('quantity', this.products.quantity);

    if (this.products.id) {
      this.$request
        .put(
          `http://127.0.0.1:8000/api/update/${this.products.id}`,
          this.products,
          
        )
        .then((res) => {
          if (res.data == "Products updated") {
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Update Product success",
              showConfirmButton: false,
              timer: 1500,
            });

            this.$router.push({ name: "admin-products" });
            return;
          }
        });

      return;
    }

    this.$request
      .post("http://127.0.0.1:8000/api/save", formData)
      .then((res) => {
        if (res.data == "Product created") {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add Product success",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push({ name: "admin-products" });
          
          return;
        }
      });
  }
},
    getProduct(productId) {
      this.$request
        .get(`http://127.0.0.1:8000/api/show/${productId}`)
        .then((res) => {
          this.products = res.data;
          this.originalProducts = { ...this.products };
          this.products.image = `http://localhost:8000/storage/customer/${this.products.image}`;
        });
    },
    cancel() {
      this.products = { ...this.originalProducts };
      this.$swal
        .fire({
          title: "Bạn muốn huỷ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ name: "admin-products" });
          }
        });
    },
  },
};
</script>

<style></style>
