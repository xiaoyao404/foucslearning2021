<template>
  <div id="app">
    <h2>{{message}}</h2>
      <h1>{{counter}}</h1>
      <button @click="counter++">+</button>
      <button @click="counter--" :disabled="counter<=0">-</button>
    <helllo-vuex :counter2="counter"></helllo-vuex>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HellloVuex from './components/HellloVuex.vue'

export default {
  components: { HellloVuex },
  name: 'App',
  data(){
    return{
      counter:0,
      message:'我是App组件'
    }
  }
}
</script>

<style>


</style>
