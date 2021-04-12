<template>
  <div id="todoList">
     <p>Todolist</p>
     <p v-show="todos.length===0">当前没有未完成任务，请添加</p>
<ul>
     <TodoItem v-for='(todo,index) in todos' :key='index' :todo='todo' :index='index' :deleteTodo='deleteTodo' />    
</ul>
  </div>
    

</template>


<script>
import TodoItem from './TodoItem.vue'
 
  export default{

  //子接父 组件
    props:{
      todos:Array,
      deleteTodo:Function
    },


    data(){
      return{

      }

    },
    methods:{
    deleteItem(){
      todos.splice(index,1)


      }


    },
    components:{
      TodoItem,
    }

  }


</script>

<style>
#todoList{
  margin: auto;
  border: 2px solid gray;
  width: 80%;
}

</style>
