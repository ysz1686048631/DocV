
// 文件读取
const fs = require('fs-extra')
// 模板替换
const handlebars = require('handlebars')
const { resolve } = require('path');
let datas = {};
module.exports =  (listFileContent) => {
    let JsonPath = resolve(__dirname, '../pages.json');
    fs.readJson(JsonPath).then(res=>{
        let datas = res;
        let typeName = listFileContent.compType
        if(!datas[typeName]){
            typeName = 'direct'
        }
        datas[typeName].children.push({
                path:listFileContent.compName,
                pageName:listFileContent.compName,
                zhName:listFileContent.compZhName,
                Createtime:Date.parse(new Date()),
                tagType:listFileContent.tagType
        })
        fs.outputJson(JsonPath,datas,err=>{
            if (err) throw console.error('Params is not empty!');
        })
    })
    let vueConfig = [{
        from: '../.template/index.vue.tpl',
        to: `../../components/${listFileContent.compName}/${listFileContent.compName}.vue`
    },  {
        from: '../.template/index.js.tpl',
        to: `../../components/${listFileContent.compName}/${listFileContent.compName}.js`
    }]
    // 入口文件 
    let enterfilePath = [
        // Vue
        /**
         * {
         * 
         * from : 入口文件
         * to :输出文件
         * }
         */
        // Js
        // md 根据用户不同的需求给予不同的模板
        {
            from: `../${listFileContent.tagType==="Y" || listFileContent.tagType=="y"?'.template':'doc'}/README.md.tpl`,
            to: `../../components/${listFileContent.compName}/README.md`
        }
    ]
    
    // 判断创建文档类型是否为vue
    if(listFileContent.tagType==="Y" || listFileContent.tagType=="y"){
        enterfilePath = enterfilePath.concat(vueConfig)
    }
    enterfilePath.forEach(item => {
        // 读取内容
        const installFileTpl = fs.readFileSync(resolve(__dirname, item.from), 'utf-8');
        // 替换内容
        const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })
        // 首先handlebars.compile会返回内容，类型：函数，再次执行将模板关键字传入进行替换 
        // 生成文件
        fs.outputFile(resolve(__dirname, item.to), installFileContent(listFileContent), err => {
            if (err) console.log(err)
        })
    })
}


