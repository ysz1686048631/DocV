import { watch,ref } from 'vue';
import { useRouter } from "vue-router";
export default function () {
    let router = useRouter();
    let routerNames = ref(router.currentRoute.value);
    watch(
        () => router.currentRoute.value,
        () => {
            routerNames.value = router.currentRoute.value;
        }
    );
    return {
        routerNames
    }
}