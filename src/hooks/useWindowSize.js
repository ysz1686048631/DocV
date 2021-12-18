import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    let windowSize = reactive({
        width: 0,
        height: 0
    })
    const onChangeSize = (e) => {
         windowSize.width = window.innerWidth;
         windowSize.height = window.innerHeight;
    }
    onMounted(() => {
        onChangeSize();
        window.addEventListener('resize', onChangeSize)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('resize', onChangeSize)
    })
    return {
        windowSize
    }
}