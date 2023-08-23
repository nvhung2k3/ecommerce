<template>
  <header-admin />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered style="width:100%;">
          <menu-admin/> 
          <template #header>
            <div>Bảng điều khiển</div>
          </template>
        </a-list>
      </div>
      <div class="col-sm-9 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "../components/Admin/HeaderAdmin.vue";
import MenuAdmin from "../components/Admin/MenuAdmin.vue";
export default {
  components: {
    HeaderAdmin,
    MenuAdmin,
  },
};
</script>

<style></style>
