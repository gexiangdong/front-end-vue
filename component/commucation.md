# 组件和父级之间的通讯


## 推荐的三种方式

组件和父级（使用组件的view或component）通讯一般通过以下3种方式：

* 父级 -> 组件， 设置属性，组件通过props接收
* 组件 -> 父级， 自定义事件传递消息；父级监听事件接收
* 双向绑定数据 v-model 

## v-model

要使用v-model，组件需要做到2点：

* 组件有一个prop的名字是value 
* value对应的值改变时，通过触发update事件(也可以是其它名字)向父级传递新值，组件调用者接收update事件并改变相应的值

例如：

### 组件

例如下面的组件，定义了2个属性：message和value，调用方可以使用v-model绑定数据到value属性上。 

```
<template>
  <div>
    <p>{{message}}</p>
    <button v-on:click="add(-1)"> - </button> {{value}} <button v-on:click="add(+1)"> + </button>
  </div>
</template>

<script>
export default {
  props: ['value', 'message'],
  methods: {
    add(step){
      var newVal = this.value + step;
      this.$emit('update', {value: newVal})
    }
  }
}
</script>

```

注意：不要在组件里直接改变传入属性的值，否则会有警告：


  [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"



### 调用方

```
<MyComponent message="Hello" v-model="num" @update="num = $event.value"/>
```


## 在父级调用组件的方法【不推荐】

我们可以通过[refs](../misc/refs.md)在程序中得到组件的节点。 把ref增加到了自定义的compoennt上，获取到的'this.$refs.xxx'获取到的就是整个自定义元素，还可以通过这种方式调用调用自定义component的methods里的方法。

这种方式是父级侵入到了组件内部代码，**耦合性很高**，因此**不建议**用这种方式和子控件通讯，如果能用v-model, props, 自定义事件等方式解决的问题不要用这种方式通讯。

