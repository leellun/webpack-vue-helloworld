<template>
  <div id="app">
      <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components:{
    HelloWorld
  }
}
</script>

<style lang='scss'>
#app {
    height: 100%;
    > div {
        height: 100%;
    }
}
</style>
