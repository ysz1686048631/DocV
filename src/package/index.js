const infoCollector = require('./config/infoCollector')
const tplreplace = require('./config/tplreplace')

async function run() {  

  const meta = await infoCollector();
  if(!meta.compZhName || !meta.compName){
      throw console.error('必填选项存在空值！');
      return false
  }
  console.time('✨✨✨创建成功！！！')
  tplreplace(meta);
  console.timeEnd('✨✨✨创建成功！！！')
}
run();