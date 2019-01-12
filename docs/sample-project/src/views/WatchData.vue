<template>
  <div>
    <h1>
      VUE对数据变化的监听和程序对数据的修改
      <p class="page-desc">VUE中对data()的修改会自动呈现到界面上，这是一个很好优点，帮助我们开发简化了很多操作。但首受限于JS，有些操作它是做不到的。</p>
    </h1>

    <h2>数组增加元素</h2>
    <div class="title-desc">
      对数组数据增加元素，需要用push方法，用array[newIndex] = xx增加一个新值，不会显示出来
    </div>
    <div v-for="(item,index) in array" v-bind:key="index">
      {{item}}
    </div>
    <button v-on:click="addItem1">给数组增加一个元素 (这种方式不行 array[array.length] = 'xxx')</button>
    <button v-on:click="addItem2">给数组增加一个元素 (这种方式可行 array.push('xxx'))</button>

    <h2>改变属性</h2>
    <div class="title-desc">
      动态给数据增加属性，不会在界面上生效的，例如props.propB在data里没定义，点击「改变propB」按钮界面没变化。
      propA在data里预先定义（定义为null），所以改变值(点击「改变propA」按钮)是生效的。
      propC是没有定义的，可以用this.$set()方法来增加属性，也是可以得到实时改变的。
      <br/>
      propB的方式改变后的值，会在propA/propC方式改变后展示出来，只是不能实时显示
    </div>
    <div>
      <p>propA: ({{props.propA}}) <span class="comment">data中有预先定义为null</span></p>
      <button v-on:click="changePropA">改变propA</button>
      <p>propB: ({{props.propB}}) <span class="comment">data中<b>没有</b>预先定义</span></p>
      <button v-on:click="changePropB">改变propB</button>
      <p>propC: ({{props.propC}}) <span class="comment">data中<b>没有</b>预先定义，使用this.$set()方式</span></p>
      <button v-on:click="changePropC">改变propC</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchData',
  data() {
    return {
      array: ['a', 'b', 'c'],
      props:{
        propA: null
      }
    }
  },
  methods: {
    addItem1: function(){
      // 这种操作数据，增加一个元素的方法不行， vue没法监控到，
      this.array[this.arry.length] = 'Hello'
    },
    addItem2: function(){
      // 用push给数组增加新元素是可以的
      this.array.push('Hi ' + new Date().getTime())
    },
    changePropA: function(){
      this.props.propA = new Date().getTime()
    },
    changePropB: function(){
      //由于data里没定义propB，不会生效
      this.props.propB = new Date().getTime()
    },
    changePropC: function(){
      this.$set(this.props,'propC', new Date().getTime())
    }
  }
}
</script>

<style scoped>
.title-desc{color: #666; padding: 5px; max-width: 700px;}
</style>