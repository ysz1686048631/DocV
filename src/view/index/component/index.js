import DPerview from './perview/perview.vue'
import DPerviewCode from './perview/perviewCode.vue'
import DPerviewTemp from './perview/perviewTemp.vue'

export const DOCTemp = {
     install(app){
        app.component(`DPerview`, DPerview);
        app.component(`DPerviewCode`, DPerviewCode);
        app.component(`DPerviewTemp`, DPerviewTemp);
     }
}