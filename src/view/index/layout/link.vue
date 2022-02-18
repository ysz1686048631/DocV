<style lang="less" scoped>
li {
  list-style: none;
}
.warpSilder {
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: 1rem;
  &_minilogo {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 1rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &_userinfo {
    padding: 1.5rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #dcdfe6;
    & > div:nth-of-type(1) {
      font-family: "Montserrat", sans-serif;
      font-size: 0.6rem;
      font-weight: 200;
      color: #ccc;
      padding-top: 0.5rem;
      text-align: justify;
    }
  }
  .active {
    border-right: 0.2rem solid #3eaf7c;
  }
  &_title {
    //  color: #2c3e50;
    color: #333;
    font-weight: bold;
    text-shadow: 0 2px 4px rgb(0 0 0 / 20%);
    font-size: 1rem;
    font-family: "SimHei";
    margin-left: 1.3rem;

    &:nth-of-type(1) {
      margin-top: 2rem;
    }
    &_cell {
      padding: 1rem 0;
    }
  }
  &_link {
    padding: 0.3rem 1rem;
    cursor: pointer;
    border-left: 1px solid transparent;
    // transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    a {
      font-weight: 500;
      font-size: 0.9rem;
      font-family: Arial, sans-serif;
      color: #333;
      text-shadow: 0 2px 4px rgb(0 0 0 / 20%);
      &.success {
        color: #3eaf7c;
      }
      &.default {
        color: #303133;
      }
    }
  }
}
</style>
<script setup>
import { toRaw, defineProps, watch, ref } from "vue";
import { router } from "@/router/routerbasic";
import { sildertoggle } from "@/utils/asyncToggle.js";
import { useRouter } from "vue-router";
import { Comppath } from "@/utils/asyncRouter.js";
import { Messages } from "@/hooks/useMessages.js";
import useWatchRouter from "@/hooks/useWatchRouter";
import { sysConfig } from "@/package/config.js";
import useWindowsize from "@/hooks/useWindowSize.js";
let { windowSize } = useWindowsize();
const pathlist = [...Comppath];
const pageTo = (url) => {
  router
    .push("/" + url)
    .then((res) => {})
    .catch((err) => {
      Messages.error(err);
    });
  sildertoggle(false);
};
let { routerNames } = useWatchRouter();
let routerName = ref(routerNames);
watch(
  () => router.currentRoute.value,
  () => {
    routerName.value = router.currentRoute.value;
  }
);

const closeSilder = () => {
  sildertoggle(false);
};
</script>
<template>
  <div class="warpSilder">
    <div class="warpSilder_minilogo" v-show="windowSize.width < 720">
      <img src="../../../assets/svg/logo.svg" alt="" />
    </div>
    <div class="warpSilder_userinfo" v-if="sysConfig.descriptions">
      <div>文档描述:{{ sysConfig.descriptions }}</div>
    </div>
    <ul>
      <li
        class="warpSilder_title"
        v-for="(item, index) in pathlist"
        :key="index"
      >
        <span>{{ item.zhName }}</span>
        <ul class="warpSilder_title_cell" v-show="item.children.length > 0">
          <li
            class="warpSilder_link"
            v-for="(citem, cindex) in item.children"
            :key="cindex"
            :class="[routerName.name == citem.path ? 'active' : '']"
            @click="pageTo(citem.path)"
          >
            <a
              :class="[routerName.name == citem.path ? 'success' : 'default']"
              >{{ citem.zhName }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
