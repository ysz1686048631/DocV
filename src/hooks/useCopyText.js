import { onMounted, onBeforeUnmount } from 'vue';
import { sysConfig } from '../package/config';
export default function () {
    const onChangeCopy = (e) => {
        if(!sysConfig.copys.copyStatu) return false;  
      
		let clipboardData = e.clipboardData ?? window.clipboardData;
	
		if(!clipboardData) return ;
		let text = window.getSelection().toString();
		if(text){
			e.preventDefault();
			clipboardData.setData('text/plain', text + `${sysConfig.copys.copyText}`);
        }
    }
    onMounted(() => {
        document.addEventListener('copy', onChangeCopy)
    })
    onBeforeUnmount(() => {
        document.removeEventListener('copy', onChangeCopy)
    })
  
}