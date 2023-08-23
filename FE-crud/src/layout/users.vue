<template>
  <header-user />
  <router-view></router-view>
</template>

<script>
import HeaderUser from "../components/user/HeaderUser.vue";
export default {
  components: {
    HeaderUser,
  },
};
</script>

<style></style>
