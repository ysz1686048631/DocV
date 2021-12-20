
const fs = require('fs-extra')

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
    let enterfilePath = [
        {
            from: `../${listFileContent.tagType==="Y" || listFileContent.tagType=="y"?'.template':'doc'}/README.md.tpl`,
            to: `../../components/${listFileContent.compName}/README.md`
        }
    ]
    
    if(listFileContent.tagType==="Y" || listFileContent.tagType=="y"){
        enterfilePath = enterfilePath.concat(vueConfig)
    }
    enterfilePath.forEach(item => {
        const installFileTpl = fs.readFileSync(resolve(__dirname, item.from), 'utf-8');
 
        const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })
     
        fs.outputFile(resolve(__dirname, item.to), installFileContent(listFileContent), err => {
            if (err) console.log(err)
        })
    })
}


