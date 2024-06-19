<template>
  <div>{{ name }}!</div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    name: {
      type: String,
      required: true
    },
  },
  mounted() {

  },
}
</script>

<style>

</style>