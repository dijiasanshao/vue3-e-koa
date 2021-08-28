<template>
  <div>
    <h1>欢迎来到登陆界面</h1>
    <Welcome msg = 'jda'></Welcome>
    <el-button @click="goHome">回首页</el-button>
    
  </div>
</template>
  
  <script>
      import Welcome from './Welcome.vue'
export default {
  name: "login",
  components:{
    Welcome
  },
  methods: {
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>
  
  <style>
</style>