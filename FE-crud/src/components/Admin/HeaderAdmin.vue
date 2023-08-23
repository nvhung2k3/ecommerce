<template>
  <div class="container-fluid align-items-center bg p-3 ">
    <div class="row text-white">
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
            <span @click="showDrawer()"><i class="fa-solid fa-bars"></i></span>
        </div>
        <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
            <img src="../../assets/logo.svg" alt="" style="width: 34px; height: 32px;">
            <span class="d-none d-sm-flex">QUAN TRI</span>
        </div>
        <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
            <span>ADMIN</span>
        </div>
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
            <span @click="showDrawerUser()"><i class="fa-solid fa-user"></i></span>
        </div>
    </div>
  </div>
  <a-drawer
    v-model:visible="open"
    title="Danh muc"
    placement="left">
    <menu-admin/>
  </a-drawer>

   <a-drawer
    v-model:visible="open_user"
    title="Admin"
    placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import MenuAdmin from './MenuAdmin.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components:{
    MenuAdmin
  },
  setup() {
    const open = ref(false);
    const open_user = ref(false);
   
    const showDrawer = () => {
      open.value = true;
    };
    const showDrawerUser = () => {
      open_user.value = true;
    };
    return {
      open,
      open_user,
      showDrawer,
      showDrawerUser
    };
  },
});
</script>
<style scoped>
.bg{
  background-color: rgb(67, 0, 84);
}
</style>