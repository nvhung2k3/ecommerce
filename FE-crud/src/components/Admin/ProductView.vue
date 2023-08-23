<template>
  <div class="container overflow-auto ">
    <div class="row my-4">
      <div class="col-sm-10">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div class="col-sm-2">
        <button class="btn btn-success my-2 my-sm-0" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h3>
          Product View
          <router-link :to="{ name: 'admin-product-add' }" class="btn btn-primary float-sm-end"
            ><i class="fa-solid fa-plus"></i> Add Product</router-link
          >
        </h3>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" >ID</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Mô tả sản phẩm</th>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Giá</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td class="description-column">{{ product.description }}</td>
          <td>
            <img
              :src="'http://localhost:8000/storage//customer//' + product.image"
              alt=""
              style="width: 50px; height: 50px"
            />
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <router-link
              :to="{ name: 'admin-product-edit', params: { id: product.id } }"
              class="btn btn-dark btn-block"
              ><i class="fa-solid fa-pen-to-square"></i> Edit</router-link
            >
            <button
              class="btn btn-danger btn-block ms-sm-2"
              @click="onDelete(product.id)"
            >
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "productview",
  data() {
    return {
      products: [],
    
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      this.$request.get("http://127.0.0.1:8000/api/products").then((res) => {
        this.products = res.data;
      });
    },
    onDelete(productId) {
      this.$swal
        .fire({
          title: "Do you want to delete?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$request
              .delete(`http://127.0.0.1:8000/api/delete/${productId}`)
              .then((res) => {
                if (res.data == "deleted") {
                  this.$swal.fire("Delete!", "", "success");
                  this.getAllProducts();
                }
              });
          }
        });
    },
  },
};
</script>

<style scoped>
  .description-column {
    max-width: 200px; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  overflow: hidden;
  }
</style>
