<template>
    <div>
        <product-view/>
    </div>
</template>
<script>
import ProductView from '../../../components/Admin/ProductView.vue';
import { useMenu } from "../../../stores/use-menu.js";
export default {
    components:{
        ProductView
    },
    setup(){
    useMenu().onSelectedKeys(["admin-products"]);
    }
}
</script>