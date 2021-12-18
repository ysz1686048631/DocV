import DPerview from './perview/perview.vue'
import DPerviewCode from './perview/perviewCode.vue'
import DPerviewTemp from './perview/perviewTemp.vue'
// 自动导入全局组件并更新
export const DOCTemp = {
     install(app){
        app.component(`DPerview`, DPerview);
        app.component(`DPerviewCode`, DPerviewCode);
        app.component(`DPerviewTemp`, DPerviewTemp);
     }
}