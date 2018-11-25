Template中的语法
----

Template中和HTML类似，有以下要求

* 一个.vue文件中的template部分有一个根节点，可以是div，也可以是其它任意标签
* 标签闭合不是必需的，但推荐使用


## 显示model里的变量

直接用两个大括号括起来的方式写即可。

```
<span>{{message}}</span>
```

## 标签的属性

如果某个html标签的属性需要跟随model里的值变化而变，则需要下面第2、3行的写法

```
<img src="/img/user.jpg" />
<img v-bind:src="userphoto" />
<img :src="userphoto" />
```
上面几行代码，第一行的图src是写死的显示/img/user.jpg；后面两行是src和model中的变量userphoto绑定，跟随userphoto的值变化而改变。v-bind可以用第三行的方式简写省略掉。

## 列表/循环

```
<template>
  <ul>
    <li v-for="(item, index) in list" v-bind:key="item.id">
  	  {{index + 1}} : {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [{id:111, name:'Tom'}, {id:112: name:'Jack'}]
    }
  },
```
如果没有唯一的key，可以不写v-bind:key属性。如果不需要序号，可以省略掉index，例如：

```
<li v-for="item in list">{{item.name}}</li>
```

## 条件渲染

## v-if
```

```
## v-show
v-show只是改变元素的style中的display属性，不论v-show的值为真货假，带有v-show的元素始终会被渲染并保留在DOM中。

```
<div v-show="var">
   Hello, world.
</div>
```

## 事件

```HTML
<a href="javascript:;" v-on:click="crateNewOne()">新增</a>
<a href="javascript:;" v-on:click="crateNewOneWithParams('blank', 123, varInData)">新增</a>
```