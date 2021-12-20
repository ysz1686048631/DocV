const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')
const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
module.exports = async () => {
  const meta = await inquirer
    .prompt([
      {
        type: 'input',
        message: '请输入你要新建的模块名（纯英文，大写开头，必填）：',
        name: 'compName',
      },
      {
        type: 'input',
        message: '请输入你要新建的模块名（中文，必填）：',
        name: 'compZhName'
      },
      {
        type: 'input',
        message: '请输入页面归档(例如：direct，选填)：',
        name: 'compType',
        default: 'direct'
      },
      {
        type: 'input',
        message: '文档类型是否为Vue组件类型(Y/N)：',
        name: 'tagType',
        default:'Y'
      }
    ])
  const { compName } = meta
  meta.compClassName = kebabCase(compName)
  return meta
}