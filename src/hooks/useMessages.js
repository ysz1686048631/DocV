import { ElMessage } from 'element-plus'

function MessageSuccess (msg){
         return ElMessage({
            message:msg,
            type:'success',
          })
}
function MessageWarning (msg){
    return ElMessage({
       message:msg,
       type:'warning',
     })
}
function MessageError (msg){
    return ElMessage({
       message:msg,
       type:'error',
     })
}
function MessageDefault (msg){
    return ElMessage({
       message:msg,
     })
}
export const Messages = {
        success:MessageSuccess,
        warning:MessageWarning,
        error:MessageError,
        default:MessageDefault
}