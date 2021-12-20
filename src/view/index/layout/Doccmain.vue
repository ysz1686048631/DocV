<style lang="less" scoped>
@import url('../../../styles/commit.less');
@import url('../../../styles/container.less');

</style>
<script setup>
import Prism from "prismjs";

Prism.highlightAll();
   import { defineProps,defineAsyncComponent,watch } from 'vue';
   const props = defineProps({
         transitions:{
              type:String,
              default:()=>'fade-scale'
         }
   })
  const DoccFooter = defineAsyncComponent(() => import("./Doccfooter.vue"));
</script>

<template>
       <div class="warpContainer">
           <div>
               <router-view v-slot="{Component}">
                  <transition
                    :name="transitions"
                  >
                  <keep-alive>
                      <component  :is="Component"></component>
                  </keep-alive>
                  </transition> 
              </router-view>
             
              <DoccFooter></DoccFooter>
           </div>
       </div>
</template>
