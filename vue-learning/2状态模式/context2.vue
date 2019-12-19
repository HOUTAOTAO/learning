// 优化后的context.vue
<template>
  <div>
    <Steps :current="status">
      <Step title="已完成" content="这里是第一步"></Step>
      <Step title="进行中" content="这里是第二步"></Step>
      <Step title="待进行" content="这里是第三步"></Step>
      <Step title="待进行" content="这里是第四步"></Step>
    </Steps>
    <!-- 返回上一步 -->
    <button v-if="canGoBack" @click="goBack">返回上一步</button>
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
  
  const DEFAULT_STATUS = 1
  
  export default {
    data() {
      return {
        status: DEFAULT_STATUS,
        cache: [] // 缓存状态
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
      },
      canGoBack() {
        return this.cache.length > 0
      }
    },
    methods: {
      // 代表每一步的状态组件都有改变status的能力
      changeStatus(val) {
        // 缓存每一次的状态变化
        this.cache.push(val)
        this.status = val
      },
      goBack() {
        // 弹出当前状态
        this.cache.pop()
        // 改变状态为上一个状态
        this.status = this.cache[this.cache.length - 1] || DEFAULT_STATUS
      }
    }  
  }
</script>
