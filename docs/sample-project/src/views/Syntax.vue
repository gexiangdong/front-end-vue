<template>
  <div>
    <h1>Template语法</h1>

    <div class="item">
      <h2>v-html</h2>
      <p>
        用两个大括号包围起来的变量，在显示时，会自动html encoding，例如：
        {{ message }}
      </p>
      <p>
        如果不希望自动html encoding，需要把变量赋值给属性v-html，例如：
        <span v-html="message">把要显示的内容作为属性v-html的值，就显示HTML了，这里会被取代</span>
      </p>
    </div>

    <div class="item">
      <h2>v-if</h2>
      <button v-on:click="seeme = !seeme">切换显示</button>
      seeme={{seeme}}
      <div class="panel" v-if="seeme">v-if根据传递的值来决定是否描画</div>
    </div>

    <div class="item">
      <h2>v-show</h2>
      <button v-on:click="displayit = !displayit">切换显示</button>
      displayit={{displayit}}
      <div class="panel" v-if="displayit">v-show不显示时html元素也存在，只是display:none</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Syntax',
  data() {
    return {
      seeme: true,
      displayit: true,
      message: 'hello <b>world</b>'
    }
  }
}
</script>

<style>
.item {margin: 20px 10px; vertical-align: top;}
.panel{display: inline-block; margin:0 10px; width: 500px; border:1px solid #DEDEDE; background-color:#EEE;}
</style>
