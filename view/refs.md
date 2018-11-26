# 在script某个html节点
----

在以前html中给节点增加一个id，然后在程序中用`document.getElementById()` 的方式依旧可以工作。 但用前端工程化后的项目view很多，还有些引用的第三方插件组成的界面，很可能有id重复造成自己程序得到的元素不是自己想要的情况。

vue中ref属性帮我们解决了这个问题，看下面例子


```vue
<template>
  <div>
    <!-- 下面这个input元素增加了ref属性 -->
    <input ref="name" type="text" v-model="name" />
    <button v-on:click="save">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods:{
    save: function(){
      if (this.name == ''){
        // 下面这行通过this.$ref来获取上面template中的input元素
        this.$refs.name.focus() 
        alert('请输入姓名')
      }
    }
  }
}
</script>
```

上述代码中，input 节点增加了`ref="name"`这个属性，程序中可以用 `this.$refs.name` 来获得到这个节点，获得到节点后可以用`focus()`使当前输入转移到此控件上。

ref方式不仅仅限于输入框，可以使用它来获取任意html标签元素，然后对元素进行获取和修改，包括且不限于class, style, innerHTML等等。


