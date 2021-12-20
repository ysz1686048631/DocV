## Docv-cli 快速入门
> 这是一款基于Vite2.0+Vue3.0+EPlus搭建的建议笔记生成器,帮助开发者构建自定义组件与交互模式笔记工具.
### 安装Cli
```js
npm install docv-cli -g
```
#### 项目创建
```js
docv my-project
```
#### 运行项目
```js
npm run doc
```
#### 打包
```js
npm run build
```
#### src目录
```js
- component    - 页面（组件）存放文件
- hooks        - 添加Hooks
- package      - 命令创建核心文件
  -  config.js - 项目配置文件使用方法见项目
  -  page.json - 真实路由设置文件
- router       - 路由文件
- styles       - 全局样式
- utils        - 工具函数
- view         - 主模板显示
```
#### 创建笔记页面（组件），回答相应的问题即可
```js
npm run create  
``` 
#### 最后
> 不管你是一名前端开发者，还是其它行业的开发者使用该笔记工具，对于我们来说都是不期而遇。感谢使用!


