<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'SPH-Header',//Component name "" should always be multi-word.xxx-yyy
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
