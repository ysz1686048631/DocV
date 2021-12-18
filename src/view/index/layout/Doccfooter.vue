

<style lang="less" scoped>
.doccfooter{
     font-size: .8rem;
     color: #666;
     display: flex;
     justify-content: space-between;
    padding-bottom: 2rem;
}
</style>
<script setup>
import useWatchRouter from '@/hooks/useWatchRouter';
import moment from 'moment'
import ch from 'moment/locale/zh-cn'
import { ref } from 'vue';
let { routerNames } = useWatchRouter();
let times = ref(routerNames);
moment.locale('zh-cn',ch);
let viteTeim = moment(parseInt(times.value.meta.time)).format('YYYY-MM-DD')
</script>
<template>    
        <div class="doccfooter">
               <div> 创建时间：{{ viteTeim }}</div>
               <div>类型：{{ times.meta.type=='Y'?'组件文档':'其他文档'}}</div>
        </div>
</template>

