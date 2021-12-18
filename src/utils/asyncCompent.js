
// 如果需要写独立组件 不能使用命令创建
// 命令创建组件【自动创建文档界面，自动注册路由，自动注册组件】
// 这里不能使用 await 异步注册组件 使用 vite 自动化导入的方式注册组件 否则生产模式会报错
import {defineComponent} from 'vue';
function getModules() {
  const components = import.meta.glob('../components/**/*.vue')
  return components
}
function getComponents() {
  // 将所有带有.vue文件都归为组件处理，如果是单纯的文档 可以移除掉.vue文件与.js文件
  const components = import.meta.globEager('../components/**/*.vue')
  return components
}
const modules = getModules();
const components = getComponents();
export const getCompPath = ()=>{
    let paths = [];
    for(let item in components){
        paths.push({
              name:components[item].default['name'],
            //   需要用vite规定的导入方式导入,否则打包后部署到服务器报错找不到动态导入的文件,
            //   使用/* @vite-ignore */则不会在开发是报错
              module:defineComponent(components[item].default)
        })
    }
    return paths
}


