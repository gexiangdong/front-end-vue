<template>
  <div>
    <p>{{message}}</p>
    <button v-on:click="add(-1)"> - </button> {{value}} <button v-on:click="add(+1)"> + </button>
  </div>
</template>

<script>
export default {
  props: ['value', 'message'],
  methods: {
    add(step){
      this.value += step;
      this.$emit('input', this.value)
    }
  }
}
</script>
