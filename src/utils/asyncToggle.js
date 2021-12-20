import { computed, ref } from "vue";

export const sildertogglebar = ref(false);

export const sildertoggle = (type)=>{
    sildertogglebar.value = type;
    return computed(()=>sildertogglebar.value).value;
}