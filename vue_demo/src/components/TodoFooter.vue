<template>
    <div id="todoFooter">

        <p>TodoFooter</p>
<input type="checkBox" v-model="isAllCheck">
<span>已完成{{completeCount}}/全部{{todos.length}}</span>
<br> 
        <button v-show="completeCount"  @click='deleteComplete' type="button" id="footerBtn">清除已完成任务</button>
    </div>
    
  
</template>


<script>
  export default{
    props:{
      todos:Array,
      deleteComplete:Function,
      selecteAll:Function,

    },
    computed:{
      completeCount(){
        return this.todos.reduce((pretotal,todo)=>
          pretotal+(todo.complete?1:0),0)

      },
      isAllCheck:{
        get(){
          return this.completeCount===this.todos.length
        },
        set(value){
          this.selecteAll(value)
        }
      }
    },
    data(){
      return{
        selected:0,
        total:2,

      }
    }

  }

</script>

<style>
#todoFooter{
  margin: auto;
  border: 2px solid gray;
  width: 80%;
}
#footerBtn{
  background:lightgreen;
  margin-right: 2%;

}
</style>
