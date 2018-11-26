# 自定义事件
----


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