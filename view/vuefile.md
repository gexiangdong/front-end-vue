# .vue文件的结构
====

vue create创建的初始项目中包含Home.view和About.vue两个视图，在src/views目录下，我们一般添加页面也放在这个目录下。

每个view包含3部分：

* template  页面的模版，内容是html格式
* script   页面中的数据处理部分
* style   样式表

## template
这部分和HTML语法类似，只是给元素增加一些VUE特有的属性。这些属性一般以v-开头。

* v-bind:htmlProperty="var in data() | 表达式" 把html的属性和data中的变量或表达式绑定；data更新时，html自动更新
* v-on:htmlEvent="function in methods" 监听事件
* v-model="var in data()" 双向绑定，html里值更新后，会自动更新data里对应的变量

v-bind: 可以简写成 :，例如: `v-bind:class="styleClass"`可简写成`:class="styleClass"`。

v-on: 可简写成 @，例如： `v-on:click="buttonClicked"`可简写成`@click="ButtonClicked"`。

## script


## style



## 数据的双向绑定

### bug
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
上述程序addItem1不会正常添加；addItem2则可以
