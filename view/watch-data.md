# 对数据改变的监听


VUE中对data数据内修改会自动呈现到界面上，这被称作「深入响应式」，它是非侵入性的响应式。这是一个非常棒的特点，帮助我们开发简化了很多操作。受限于JS，有些操作它是监听不到的，需要我们在程序中避免。

如果你遇到了改变了数据，但界面上死活不跟着变，并且用console.log记录确认了变化，这时我会建议你换个写法/方式改变数据。

### 数组

给数组增加新元素不要用array[newIndex] = xxx的方式。用数组的push方法增加元素。

```vue
<template>
  <div>
    <div v-for="item in array">
      {{item}}
    </div>
    <button v-on:click="addItem1">add 1</button>
    <button v-on:click="addItem2">add 2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem1: function(){
      //这种改变数据的方式，vue不能监测到，因此不会生效
      this.array[this.arry.length] = 'Hello'
    },
    addItem2: function(){
      this.array.push('hi')
      this.array = ary
    }
  }
}
</script>
```
上述程序addItem1不会正常添加；addItem2则可以。

### 给data中增加新属性

用this.xxx 或 this.xxx.yy 等方式给data中增加新属性，如果属性没有在data函数中定义出来（写个null值也算定义），这种方式增加的属性，界面上不会自动呈现。解决办法就是2个：

* 先定义 （下例中propA)
* 用this.$set方法 （下例中propC)

```vue
<template>
  <div>
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
  data() {
    return {
      array: ['a', 'b', 'c'],
      props:{
        propA: null
      }
    }
  },
  methods: {
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

```

上例中，点击「改变propB」之后，propB的显示不出现/改变，但是点击其它两个按钮后，propB的值会被更新，只是没有实时响应，并不是修改被丢弃（和数组的不同）
