<template>
  <div class="offcanvas bg-white offcanvas-end" id="demo">
    <div class="offcanvas-header">
      <h1 class="offcanvas-title">Cart</h1>

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="row text-center mb-1">
        <div class="col-5 p-0">Product's name</div>
        <div class="col-3 p-0">Quantity</div>
        <div class="col-2 p-0">Price</div>
        <div class="col-2 p-0">Cancel</div>
      </div>
      <ul class="list-group">
       
        <li class="list-group-item mb-3">
          <div class="row d-flex align-items-center text-center">
            <div class="col-5 p-0 d-flex align-items-center text-center">
              <img
                src="../../assets/image/iphone 13 pro.png"
                class="w-25"
                alt=""
              />
              <p class="m-0">Iphone13</p>
            </div>
            <div class="col-3 p-0">
              <div>
                <button class="border-0 bg-white" @click="reduce">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="px-2">{{ count }}</span>
                <button class="border-0 bg-white" @click="count++">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="col-3 p-0">$1000</div>
            <div class="col-1 p-0">
              <button class="text-danger border-0 bg-white">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </li>
        <div class="d-flex justify-content-end">
          <span>Total : $3000</span>
        </div>
      </ul>
      <div class="w-100 text-center">
        <button class="btn btn-secondary" type="button">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    reduce() {
      if (this.count > 1) {
        this.count--;
      }
    },
  },
};
</script>

<style></style>
