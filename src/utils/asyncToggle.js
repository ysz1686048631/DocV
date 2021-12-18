import { computed, ref } from "vue";

export const sildertogglebar = ref(false);
// 侧边栏显示与隐藏
export const sildertoggle = (type)=>{
    sildertogglebar.value = type;
    return computed(()=>sildertogglebar.value).value;
}