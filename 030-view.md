VIEW
--
vue create创建的初始项目中包含Home.view和About.vue两个视图（页面），在src/views目录下，我们一般添加页面也放在这个目录下。

每个view包含3部分：
* template  页面的模版，内容是html格式
* script   页面中的数据处理部分
* style   样式表

## template


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