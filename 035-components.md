使用自定义组件component
------

## 自定义组件

自定义组件一般放到src/components目录下，文件名和view文件名相似，自己的名字 + .vue 的扩展名。组件也是分template, script, style三部分。

如果需要传递参数到组件中，需要定义props





## 使用自定义组件

```
<template>
  <div>
     <MyComponent />
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent'

export default {
  components: { MyComponent }
}
```

## 自定义事件

在组件中触发

```
this.$emit('myEvent', params)
```

在父级监听：

```
<MyComponent v-on:myEvent="myEventListener" />
```
注意事件名字要完全一致，VUE不会自动转换驼峰写法与下划线写法