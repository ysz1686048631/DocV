<style lang="less">
.warpMiniSilder {
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
}
.drawers{
    .el-drawer__body{
       padding: 0;
    }
}
</style>
<script setup>
import { toRaw,defineProps,defineAsyncComponent  } from "vue";
import {sildertoggle} from '@/utils/asyncToggle.js';
const DoccLink = defineAsyncComponent(() => import("./link.vue"));

const props = defineProps({
       showSilder:{
              type:Boolean,
              default:()=>false
       }
})
const closeSilder = ()=>{
      sildertoggle(false)
}
</script>
<template>
  <el-drawer custom-class="drawers" v-model="props.showSilder" direction="ltr" @close="closeSilder" size="60%" title="I am the title" :with-header="false">
      <div class="warpMiniSilder">
      <DoccLink/>
     </div>
  </el-drawer>
</template>
