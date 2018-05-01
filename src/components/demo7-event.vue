<template>
  <div>
    <h3 v-html="title"></h3>
    <div>
      <button @click="eventFn($event)" data-set="dataset自定义属性">$event事件传参</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'demo7',
  data () {
    return {
      title: "$event事件传参"
    }
  },
  methods : {
    eventFn(e) {
      console.log(e);
      e.srcElement.style.background = "red";
      console.log(e.srcElement.dataset.set);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
