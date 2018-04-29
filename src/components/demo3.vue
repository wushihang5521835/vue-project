<template>
  <div>
    <h3 v-html="title"></h3>
    <input type="text" v-model="newValue" @keyup.enter="enter">
    <ul>
      <li v-for="item in list" v-bind:class="{isFinally:item.isFinally}" v-on:click="clickLi(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      title: "v-for使用、:class使用、v-on:click与v-model、keyup.enter使用",
      list:[
        {
          "label":"true",
          "isFinally": true
        },
        {
          "label":"false",
          "isFinally": false
        }
      ],
      newValue : ""
    }
  },
  methods : {
    clickLi : function(item) {
      console.log("item.isFinally-->",item.isFinally);
      item.isFinally = !item.isFinally;
    },
    enter : function(){
      console.log(this.newValue);
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
