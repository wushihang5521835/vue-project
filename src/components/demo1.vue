<template>
  <div>
    <h2 v-html="title"></h2>
    <h3 v-if="isIf">{{ msg }} aaasds</h3>
    <span v-show="isShow">acc</span>
    <h4 v-text="msg"></h4>
    <h5 v-html="msg"></h5>
  </div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      title: "v-if、v-show、v-text、v-html使用",
      msg : "hello demo1",
      isShow: true,
      isIf:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
