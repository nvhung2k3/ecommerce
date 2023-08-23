<template>
    <div>
        day la tran quan li setting
    </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu.js";

export default {
    setup(){
    useMenu().onSelectedKeys(["admin-settings"]);

    }
}
</script>