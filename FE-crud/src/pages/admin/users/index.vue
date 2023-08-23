<template>
    <div>
        day la tran quan li users
    </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu.js";

export default {
    setup(){
    useMenu().onSelectedKeys(["admin-users"]);

    }
}
</script>