<template>
  <elContainer>
    <el-header :height="height + 'vh'">
      <DoccHeader :windowSize="windowSize.width<720" />
    </el-header>
    <elContainer>
      <MiniSilder :showSilder="sildertogglebar"/>
      <el-aside :width="windowSize.width<720?'0px':width + 'px'">
        <DoccSilder />
      </el-aside>
      <el-main>
        <DoccMain :transitions="sysConfig.transitions" />
      </el-main>
    </elContainer>
  </elContainer>
</template>
<script setup>
import { defineAsyncComponent, defineExpose, ref } from "vue";
import useWindowsize from "@/hooks/useWindowSize.js";
import {sildertogglebar} from '@/utils/asyncToggle.js';
import {sysConfig} from '@/package/config.js';
import useCopytext from '@/hooks/useCopyText.js';

useCopytext()
const DoccHeader = defineAsyncComponent(() =>
  import("./layout/Doccheader.vue")
);
const DoccMain = defineAsyncComponent(() => import("./layout/Doccmain.vue"));
const MiniSilder = defineAsyncComponent(() => import("./layout/miniSilder.vue"));
const DoccSilder = defineAsyncComponent(() =>
  import("./layout/Doccsilder.vue")
);
let { windowSize } = useWindowsize();
const width = ref(260);
const height = ref(10);
defineExpose({
  width,
  height,
});
</script>
<style lang="less" scoped>
/deep/
.el-main,.el-header{
  padding: 0 0;
}
.el-aside{
    transition:all .3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
}
@import url('../../styles/commit.less');
</style>

