<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      res:{}
    }
  },
  components: {
  },
  mounted(){
    // 本地加载json
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })
  }
}
</script>

<style>
</style>
