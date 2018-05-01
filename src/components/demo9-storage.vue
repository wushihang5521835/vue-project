<template>
  <div>
    <h3 v-html="title"></h3>
    <div>
      <input type="text" v-model="myText" @keydown="kd($event)"><button @click="add()">add</button>
      <div>
        <h4>未完成</h4>
        <ul class="list"
          <li v-for="(item,key) in list" v-if="!item.selected">
            <input type="checkbox" v-model="item.selected" @change="changeStatu()"><a href="javascript:;" @click="del(key)">{{item.title}}</a><button @click="del(key)">删除</button>
          </li>
        </ul>

        <h4>已完成</h4>
        <ul>
          <li v-for="(item,key) in list" v-if="item.selected">
            <input type="checkbox" v-model="item.selected" @change="changeStatu()"><a href="javascript:;" @click="del(key)">{{item.title}}</a><button @click="del(key)">删除</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import storage from "../model/storage";

export default {

  name: 'demo9',
  data () {
    return {
      title: "localstorage使用与封装",
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
        storage.set("list",this.list);
      }
      this.myText = "";
    },
    del(key) {
      this.list.splice(key,1);
      storage.set("list",this.list);
    },
    kd(e) {
      console.log(e.keyCode);
      if (e.keyCode === 13){
        this.add();
      }
    },
    changeStatu() {
      storage.set("list",this.list);
    }
  },
  mounted() { //生命周期函数，vue页面刷新就会触发的方法
    this.list = storage.get("list");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
