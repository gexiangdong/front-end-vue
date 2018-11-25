事件
---

在 template 里捕获事件需要 `v-on:eventname="userfunction"`来处理。

例如:

```
<template>
  <div>
    <button v-on:click="buttonAClicked">按钮A</button>
    <button @click="buttonBClicked">按钮B</button>
    <button v-on:click="buttonClicked('c')">按钮C</button>
    <button v-on:click="buttonClickedWithEvent('a', $event)">按钮A</button>
  </div>
</template>

<script>
export default {
  methods:{
    buttonAClicked: function(event){
      console.log('buttonAClicked ', event)
    },
    buttonBClicked: function(event){
      console.log('buttonBClicked ', event)
    },
    buttonClicked: function(parm){
      console.log('buttonClicked ', parm)
    },
    buttonClickedWithEvent: function(parm, event){
      console.log('buttonClickedWithEvent ', parm, event)
    }
  }
}
</script>
```

## event.stopPropagation

我们有时需要调用event.stopPropagation()来阻止事件向父级HTML元素传递，或是调用event.preventDefault()来取消事件本身内置的行为。在VUE里，提供了一种更简单的办法，叫做「事件修饰符」

例如：

```
<div v-on:click.stop>A</div>
<div v-on:click.stop="divClicked">B</div>

```
上述代码，第一行表示阻止在A上点击传递到父级；第二行表阻止向父级传递且调用divClicked方法来处理本次点击。

VUE提供了很多事件修饰符，详情请看文档[https://cn.vuejs.org/v2/guide/events.html#事件修饰符](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

https://cn.vuejs.org/v2/guide/events.html
        