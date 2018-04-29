<template>
  <div>
    <h3 v-html="title"></h3>
    <input type="text" v-model="newValue" @keyup.enter="enter">
    <ul>
      <li v-for="item in list" v-bind:class="{isFinally:item.isFinally}">
        {{item.label}}
      </li>
    </ul>
      <company-a v-bind:mylist="list"></company-a> 
  </div>
</template>

<script>
import store from './store';
import companyA from './companyA';

export default {
  name: 'demo5',
  data () {
    return {
      title: "父组件与子组件通信",
      list: store.fetch(),
      newValue : ""
    }
  },
  components : { companyA },
  watch : {
    list : {
      handler : function(list){
        store.save(list);
      },
      deep:true
    }
  },
  methods : {
    enter : function(){
      this.list.push({
        "label": this.newValue,
        "isFinally": false
      });
      this.newValue = "";
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
