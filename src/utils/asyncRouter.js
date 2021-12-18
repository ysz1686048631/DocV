
import pageJson from '../package/pages.json';
import { ObjtoArr } from './objtoArr';
export const Comppath = ObjtoArr(pageJson);
export const initRouter =  ()=>{
    let paths = []
    for(let item in pageJson){
        pageJson[item].children.forEach(item => {
          paths.push({
            title: item.zhName,
            name: item.pageName,
            path: `${item.path}`,
            meta:{time:item.Createtime,type:item.tagType},
            component: () => import(`../components/${item.pageName}/README.md`),
          })
        });
    }
    return [...paths];
  }