

<style lang="less" scoped>
.perview {
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 0.3rem;
  margin: 1rem 0;
  &_code {
    & > div:nth-of-type(1) {
    //   border-bottom: 1px solid #dcdfe6;
      display: flex;
      justify-content: center;
      padding: 0.5rem 0;
   
      box-sizing: border-box;
      & > span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.6rem;
        cursor: pointer;
      }
      & ~ div {
        padding: 0;
        box-sizing: border-box;
        height: 0;
        overflow: hidden;
        transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
        &.isopen{
             padding: .5rem;
             height: auto;   
        }
      }
    }
  }
}
</style>
<script setup>


import {ref} from 'vue'
const isOpen = ref(false);
const onShowcode = ()=>{
     isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="perview_code">
    <div>
      <el-tooltip class="item" effect="light" content="复制" placement="bottom">
        <span>
          <svg viewBox="0 0 24 24" data-v-6ddd7666="">
            <path
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"
              fill="#3eaf7c"
            ></path>
          </svg>
        </span>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="light"
        content="源代码"
        placement="bottom"
      >
        <span @click="onShowcode">
          <svg viewBox="0 0 24 24" data-v-6ddd7666="">
            <path
              d="M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4zm6.6 0l3.9-3.9l-3.9-3.9a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0a.984.984 0 0 1 0-1.4z"
              fill="#3eaf7c"
            ></path>
          </svg>
        </span>
      </el-tooltip>
    </div>
    <div :class="isOpen?'isopen':''">
      <pre
        class="language-html"
      ><code class="language-html"><slot></slot></code></pre>
    </div>
  </div>
</template>