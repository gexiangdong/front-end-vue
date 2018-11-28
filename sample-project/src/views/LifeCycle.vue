<template>
  <div>
    <h1>
      View的生命周期
      <p class="page-desc">此view中每个事件钩子函数，都有在console.log记录日志，打开浏览器（建议chrome）看日志即可看到各个的执行时机。</p>
    </h1>
    <div v-for="(item,index) in array" v-bind:key="index">
      {{item}}
    </div>
    <button v-on:click="addItem1">add 1 (not work)</button>
    <button v-on:click="addItem2">add 2 (this one works fine)</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      array: ['a', 'b', 'c']
    }
  },
  beforeCreate: function(){
    console.log('beforeCreate')
  },
  created: function(){
    console.log('created')
  },
  beforeMount: function(){
    console.log('beforeMount')
  },
  mounted: function(){
    console.log('mounted')
  },
  beforeUpdate: function(){
    console.log('beforeUpdate')
  },
  updated: function(){
    console.log('updated')
  },
  activated: function(){
    console.log('activated')
  },
  deactivated: function(){
    console.log('deactivated')
  },
  beforeDestroy: function(){
    console.log('beforeDestroy')
  },
  destroyed: function(){
    console.log('destroyed')
  },
  errorCaptured: function(err){
    console.log('errorCaptured', err)
  },
  methods: {
    addItem1: function(){
      // 这种操作数据，增加一个元素的方法不行， vue没法监控到，
      this.array[this.arry.length] = 'Hello'
    },
    addItem2: function(){
      // 用push给数组增加新元素是可以的
      this.array.push("Hi")
    }
  }
}
</script>

<style scoped>
</style>