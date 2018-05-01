<template>
  <div>
    <h3 v-html="title"></h3>
    <div>
      <div ref="box" @click="myClick">我是一个box</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'demo6',
  data () {
    return {
      title: "ref获取dom节点"
    }
  },
  methods : {
    myClick() {
      console.log(this.$refs.box.style.background = "red");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
