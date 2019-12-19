// context.vue
<template>
  <div>
    <Steps :current="status">
      <Step title="已完成" content="这里是第一步"></Step>
      <Step title="进行中" content="这里是第二步"></Step>
      <Step title="待进行" content="这里是第三步"></Step>
      <Step title="待进行" content="这里是第四步"></Step>
    </Steps>
    <!-- 动态渲染当前状态组件 -->
    <component :is="statusCom" @onChangeStatus="changeStatus" />
  </div>
</template>
<script>
  // 引入各状态组件
  import Step1 from './Step1'
  import Step2 from './Step2'
  import Step3 from './Step3'
  import Step4 from './Step4'
  
  export default {
    data() {
      return {
        status: 1
      }  
    },
    computed: {
      // 具体状态角色
      statusCom() {
        const statusMap = {
          1: Step1,
          2: Step2,
          3: Step3,
          4: Step4,
        } 
        return statusMap[this.status]
      }    
    },
    methods: {
      // 代表每一步的状态组件都有改变status的能力
      changeStatus(val) {
        this.status = val
      }    
    }  
  }
</script>
/////////
