import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/routerbasic';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import './styles/markstyle.less'
// 导入组件
import {DOCPluGin} from './components/index';
import {DOCTemp} from './view/index/component/index';
const app = createApp(App);
app.use(router).use(DOCPluGin).use(ElementPlus).use(DOCTemp);
app.mount('#app');
