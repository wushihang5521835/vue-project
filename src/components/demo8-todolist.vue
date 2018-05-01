<template>
  <div>
    <h3 v-html="title"></h3>
    <div>
      <input type="text" v-model="myText" @keydown="kd($event)"><button @click="add()">add</button>
      <div>
        <h4>未完成</h4>
        <ul>
          <li v-for="(item,key) in list" v-if="!item.selected">
            <input type="checkbox" v-model="item.selected"><a href="javascript:;" @click="del(key)">{{item.title}}</a>
          </li>
        </ul>

        <h4>已完成</h4>
        <ul>
          <li v-for="(item,key) in list" v-if="item.selected">
            <input type="checkbox" v-model="item.selected"><a href="javascript:;" @click="del(key)">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'demo8',
  data () {
    return {
      title: "todolist",
      myText: "",
      list: [
        {
          title : "aaaa",
          selected : true
        },        
        {
          title : "bbbb",
          selected : false
        }
      ]
    }
  },
  methods : {
    add() {
      if (this.myText !== ""){
        this.list.push(
          {
            title: this.myText,
            selected : false
          }
        );
      }
      this.myText = "";
    },
    del(key) {
      console.log(key);
      this.list.splice(key,1);
    },
    kd(e) {
      console.log(e.keyCode);
      if (e.keyCode === 13){
        this.add();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
