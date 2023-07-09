<template>
  <div>
    params参数：{{ $route.params.keyword}}
    query参数：{{$route.query.k }}
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: '',//Component name "" should always be multi-word.xxx-yyy
  components: {
    
  }
}
</script>

<style scoped>

</style>
