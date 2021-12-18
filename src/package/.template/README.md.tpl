
<script setup>
let code = `<button>asd</button>
<button>asd</button>`

</script>
<style>
  .warp{
    display:flex;
  }
   .aa{
      margin: 0 .5rem;
   }
</style>
<b>newcomp</b>组件文档
<DPerview> 
  <DPerviewTemp>
        <div class="warp"><div class="aa"><button>asd</button></div><div class="aa"><button>asd</button></div></div>
  </DPerviewTemp>
  <DPerviewCode>{{code}}</DPerviewCode>
</DPerview>

#### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否 
`arg2` | 第二个参数 | string | - | `default` | 否

#### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三