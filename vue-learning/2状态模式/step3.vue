// Step1.vue
<template>
  <div>
    <!-- do something -->
    <button @click="handleClick">完成</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        // 第一步完成，将状态变为状态2
        // context角色接受状态改变动态渲染Step2.vue的操作
        this.$emit('onChangeStatus', 4)
      }
    }  
  }
</script>
