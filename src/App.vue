<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage';
export default {
  name: 'App',
  components: {
  },
  mounted(){
    storage.clear("username","user")
  }
}
</script>

<style>
</style>
