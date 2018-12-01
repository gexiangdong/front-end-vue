# .vue文件的结构


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

这里写javascript，遵守如下结构：

```vue
import MyComponent from '@/components/MyComponent.vue' //使用的自定义组件，js等需要在这里import进来；@表示src目录；

<script>
export default {
  name: '视图名称', //可省略，建议每个view定义一个不同的名称，方便找错
  components: {MyComponent}, //此view中使用的组件；如果不使用组件，可省略慈航
  data() {
    return {
      // 在这里定义数据结构，有初始值的赋初始值，没有的写null，把结构写完整
    }
  },
  // view生命周期内的钩子事件在这里定义；具体有哪些钩子函数请参考生命周期章节
  created: function(){
    console.log('created')
  },
  beforeDestroy: function(){
    console.log('beforeDestroy')
  }
  methods: {
    //此view内的方法，全部使用this.functionName调用
    //只要能用this的地方都可以调用
    //可以处理数据、访问后台、返回值
    //在模版里也可以调用这里的方法
    addItem1: function(){
      
    },
    addItem2: function(){
      //也可以有返回值的
      return 1
    }
  }
}
</script>

```

在上面的代码中有种简写方式

```
components: {MyComponent}
```
是

```
components: {MyComponent: MyComponent}
```
的简写，两者效果相同。在属性和值的名称完全一致时，可以用这种简写，这种简写在VUE项目中广泛存在。


## style

这里就是CSS，如果你喜欢用LESS、SASS、SCSSS等预编译CSS技术，先要安装对应的插件，然后在这里可以使用，需要增加lang="less"来告诉编译器用的是哪种语言。

scoped属性，有这个属性标志着这里写的css仅仅对这个vue文件内的模版生效。不会成为全局的css。我建议每个View内的css都是局部生效的，仅对view本身有效。需要全局生效的放到：
 
* App.vue内
* index.html 或在index.html引用外部css文件

如果每个view内有全局css会对整个项目的管理维护是一种伤害。

## MVVM架构

在一个扩展名是.vue的视图内，template部分是MVVM中的第一个V(View)，script部分中的data()则对应MVVM中的M(Model)，其余部分的script则对应VM(ViewModel)。如果要给style分布也归类，可放到View部分。

。
