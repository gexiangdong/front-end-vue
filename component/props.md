# 通过属性向自定义组件传递数据
====


## props

要在组件里接收数组，可通过属性来实现，首先要在组件里定义要接收的属性，例如下面的代码，表示此组件接收2个属性data和title，data是Object类型，必需；title是字符串类型，可选。

```
<script>
export default {
  name: 'MyComponent',
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
    }
  }
}
```

props也可简写成 `props: [data, title]`，这表示接收2个属性，都是可选的，类型不指定。 类型和必需的设置都是为了帮助我们避免错误，缺少属性或错误的类型时，vue会给出提示。


使用的时候给prop赋值：

```
<MyComponent v-bind:data="data" v-bind:title="title" />
<MyComponent v-bind:data="data" title="固定字符串" />
```

## v-model 双向绑定

可以使用v-model
