<template>
  <div class="home">
    <h1>
      自定义组件<p class="page-desc">自定义组件。</p>
    </h1>
    <Slider message="按+/-改变值" v-model="num"/>

    <p>用v-model双向绑定的值：{{num}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'UseComponent',
  components: {
    Slider
  },
  data() {
    return{
      num: 10
    }
  }
}
</script>
