import { getCompPath } from '@/utils/asyncCompent';
const installcomp = getCompPath()
// 自动导入全局组件并更新
export const DOCPluGin = {
    async install(app){
        for(let item of installcomp){
            app.component(`V${item.name}`, item.module);
        }
     }
}