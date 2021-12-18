<style lang="less" scoped>
.warpSilders {
  width: 100%;
  height: 90vh;
  background: rgba(205, 230, 255, 0.11);
 border-right: .1rem solid #dcdfe6;
  box-sizing: border-box;
}
</style>
<script setup>
import { toRaw,defineAsyncComponent  } from "vue";
import { Comppath,router } from "@/router/routerbasic";
const DoccLink = defineAsyncComponent(() => import("./link.vue"));
const pathlist = toRaw(Comppath);
const pageTo = (url)=>{
    router.push(url)
}
</script>
<template>
  <div class="warpSilders">
     <DoccLink/>
  </div>
</template>
