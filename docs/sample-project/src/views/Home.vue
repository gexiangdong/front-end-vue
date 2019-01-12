<template>
  <div class="home">
    <h1>
      首页<p class="page-desc">基本保留了vue自动生成的首页，一个对自定义组件的调用页面。</p>
    </h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
