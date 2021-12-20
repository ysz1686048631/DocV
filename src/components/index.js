import { getCompPath } from '@/utils/asyncCompent';
const installcomp = getCompPath()

export const DOCPluGin = {
    async install(app){
        for(let item of installcomp){
            app.component(`V${item.name}`, item.module);
        }
     }
}