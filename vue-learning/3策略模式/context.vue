// context.vue
<template>
  <!-- 根据策略规则动态渲染组件 -->
  <component :is="authCom" />
</template>
<script>
  import Need from './Need'
  import Pend from './Pend'
  import Pass from './Pass'
  import Refuse from './Refuse'
  
  const AUTH_STATUS_NEED = 0
  const AUTH_STAUTS_PEND = 1
  const AUTH_STATUS_PASS = 2
  const AUTH_STATUS_REFUSE = 3
  
  export default {
    data () {
      status: AUTH_STATUS_NEED // 通过请求api赋值
    },
    computed () {
      authCom () {
        const statusMap = {
          [AUTH_STATUS_NEED]: Need,
          [AUTH_STAUTS_PEND]: Pend,
          [AUTH_STATUS_PASS]: Pass,
          [AUTH_STATUS_REFUSE]: Refuse
        }
        // 应用策略
        return statusMap[this.status]
      }
    },
    components: {
        Need,
        Pend,
        Pass,
        Refuse
    }
  }
</script>

// Need.vue
// Pend.vue
// Pass.vue
// Refuse.vue
//... do something
