# v-model的双向绑定


用v-model把界面元素和model (script段data返回)中的值双向绑定起来了，界面上用修修改数据，model里会跟随改变，在script中修改了变量值，界面也会随之改变。

```vue
<template>
  <div>
    <!-- 下面这个input的v-model属性标示了name需要做双向绑定 -->
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
```


之前用{{}}包围起来的变量或用v-bind绑定的属性，都是单向绑定，model更新，界面跟随更新，界面上做了修改，model不会跟随改的。

直接写 `v-model="变量名"` 即可，不需要 ~~v-model:value="变量名"~~ 。所有的双向绑定都用v-model，不论之前html标签的属性名是否是value。

即使在textarea上也要用v-model，例如

```vue
<!-- 正确的写法，把textarea的value和data中的remark绑定起来了  -->
<textarea v-model="remark"></textarea>

<!-- 错误的写法  -->
<textarea>{{remark}}</textarea>
```
