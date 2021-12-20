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
        <svg viewBox="0 0 24 24" data-v-4d8591cc="">
         <path fill="#f40" xmlns="http://www.w3.org/2000/svg" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/>
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
