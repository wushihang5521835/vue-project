<template>
  <div>
    <h3 v-html="title"></h3>
    <button v-on:click="companyClick">点击</button>
    <ul>
      <li v-for="item in mylist" v-bind:class="{isFinally:item.isFinally}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from './store';

export default {
  data () {
    return {
      title: "我是companyA组件"
    }
  },
  props : ["mylist"],
  methods : {
    companyClick() {
      console.log(this.mylist);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isFinally {
  color:red;
}
</style>
