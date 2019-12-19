// context.vue
<template>
  <!-- 根据策略规则动态渲染组件 -->
  <component :is="authCom" />
</template>
<script>
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
          [AUTH_STATUS_NEED]: () => ({
            // copy自vue文档
            component: import('./Need'),
            loading: LoadingComponent,
            error: ErrorComponent,
            delay: 200,
            timeout: 3000
          }),
          [AUTH_STAUTS_PEND]: '同上',
          [AUTH_STATUS_PASS]: '同上',
          [AUTH_STATUS_REFUSE]: '同上'
        }
        // 应用策略
        return statusMap[this.status]
      }
    },
    components: {
        Need,
        Pend,
        Pass,
        Refuse,
        LoadingComponent,
        ErrorComponent
    }
  }
</script>
