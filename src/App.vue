<template>
        <router-view v-slot="{Component}">
             <transition
               name="fade"
             >
             <keep-alive>
                <component  :is="Component"></component>
             </keep-alive>
             </transition> 
         </router-view> 
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
