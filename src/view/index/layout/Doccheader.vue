<style lang="less" scoped>
.warpHeader {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  &_logo{
      display: flex;
      align-items: center;
      &>div:nth-of-type(1){
         width: 2.6rem;
         height: 2.6rem;
           margin-right: 1rem;
      }
       &>div:nth-of-type(2){
            font-weight: bold;
            font-size: 1.2rem;
            color: #303133;
         }
  }
  &_bars {
    display: flex;
    align-items: center;
    & > div {
      margin-left: 1.5rem;
    }
    .htitles {
      font-size: 0.8rem;
      cursor: pointer;
      color: #303133;
      font-weight: bold;
      font-family: "SimHei";
    }
    .icons {
      width: 1.3rem;
      height: 1.3rem;
      cursor: pointer;
    }
  }
}
</style>
<script setup>
import { defineProps, ref } from "vue";
import { sildertoggle, sildertogglebar } from "@/utils/asyncToggle.js";
import { sysConfig } from "@/package/config.js";
const props = defineProps({
  windowSize: {
    type: Boolean,
    default: () => false,
  },
});
let asyncBarToggle = sildertoggle(false);
const onChangebarToggle = () => {
  asyncBarToggle = sildertoggle(!sildertogglebar.value);
};
const toUrls = (url) => {
  window.open(url);
};
</script>
<template>
  <div class="warpHeader">
    <div class="warpHeader_logo">
         <div v-show="!windowSize"><img src="../../../assets/svg/logo.svg" alt=""></div>
         <div>DocV</div>
    </div>
    <div class="warpHeader_bars">
      <div class="htitles" v-if="sysConfig.about.path" @click="toUrls(sysConfig.about.path)">
        {{ sysConfig.about.name }}
      </div>
      <div class="icons" v-if="sysConfig.git.path" @click="toUrls(sysConfig.git.path)">
        <svg viewBox="0 0 16 16" data-v-4d8591cc="">
          <path
            fillrule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div class="icons" v-show="windowSize" @click="onChangebarToggle">
        <svg viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
              fill="currentColor"
            ></path>
            <path
              d="M4 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
              fill="currentColor"
            ></path>
            <path
              d="M11 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
