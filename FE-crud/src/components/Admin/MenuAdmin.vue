<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }">
        <span><i class="fa-solid fa-user me-2"></i>Tài khoản</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-products">
      <router-link :to="{ name: 'admin-products' }">
        <span><i class="fa-solid fa-cart-plus me-2"></i>Sản phẩm</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-settings">
      <router-link :to="{ name: 'admin-settings' }">
        <span><i class="fa-solid fa-gear me-2"></i>Cài đặt</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useMenu} from '../../stores/use-menu.js' 
import {storeToRefs} from 'pinia'
export default defineComponent({
     
  setup() {
    const store = useMenu();
    return {
        ...storeToRefs(store)
    };

  },
});
</script>

<style>

</style>