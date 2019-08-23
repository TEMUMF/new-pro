<template>
  <div id="app">
    <router-view/>
    <h1>{{test}}</h1>
  </div>
</template>

<style>

</style>

<script>
export default {
  data(){
    return {
      test:"Test"
    }
  }
}
</script>
