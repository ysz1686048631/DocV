## Docv-cli 快速入门
> 这是一款基于Vite2.0+Vue3.0+EPlus搭建的建议笔记生成器,帮助开发者构建自定义组件与交互模式笔记工具.
### 安装Docv配套脚手架
```js
npm install docv-cli -g
```

### 验证是否安装成功
```js
docv -v
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
  -  config.js - 项目配置文件，比如：配置头部git地址
  -  page.json - 真实路由设置文件
- router       - 路由文件
- styles       - 全局样式
- utils        - 工具函数
- view         - 主模板显示
```

### config.js配置文件
```js
{
    name:'',     // 作者名称
    title:'',    // 标题
    descriptions:'DocV是一款基于Vite2.0 + Vue3.0 + EPlus的简易文档生成工具', // 介绍
    // 以下两个显示在右上角
    about:{
        name:'关于文档', 
        path:'https://static-ff003bee-e9c0-4a83-91b5-f15e4a587481.bspapp.com/docv.html#/home' 
    },
    git:{
        name:'github',
        path:'https://gitee.com/shaohqfspace/doc-v' 
    },
    // 切换页面方式
    transitions:'fade-slide', 
    // 复制版权：当别人复制你的笔记的时候会在尾部追加文字
    copys:{
        copyStatu:true,
        copyText:'\n复制来源：DocV文档'  // 需要设置的文字
    }   
}
```
#### 独立定制markdown，样式需要自行编辑，导入到文件中
> style/markstyle.less

#### 创建笔记页面（组件），回答相应的问题即可
```js
npm run create  
``` 

#### 所有创建的组件或者笔记都会存放于component下

#### 最后
> 不管你是一名前端开发者，还是其它行业的开发者使用该笔记工具，对于我们来说都是不期而遇。感谢使用!


