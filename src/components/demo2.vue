<template>
  <div>
    <h2 v-html="title"></h2>
    <button v-on:click="doClick">doClick</button>
  </div>
</template>

<script>
export default {
  name: 'demo2',
  data () {
    return {
      title: "v-on:click事件使用",
      msg : "hello demo1",
      isShow: true,
      isIf:false
    }
  },
  methods : {
    doClick : function(){
      console.log("doClick...");
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
