# 创建自定义组件并使用它
====


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
