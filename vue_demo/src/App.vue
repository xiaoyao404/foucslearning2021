<template>

    <div id="container">
        <TodoHeader :addTodo='addTodo' />
        <TodoList   :todos='todos' :deleteTodo='deleteTodo'  /> 
        <TodoFooter :todos='todos'  :deleteComplete='deleteComplete' :selecteAll='selecteAll' />
    </div>
</template>


<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList   from   './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


  export default{
    data(){
      return{
        todos:[
          {title:'吃饭', complete:false},
          {title:'睡觉', complete:false},
          {title:'敲代码', complete:false},
          {title:'洗澡', complete:false},
        ]

      }

    },

      components:{
          TodoHeader,
          TodoList,
         TodoFooter,
      },
      methods:{
        //删除完成的
        deleteComplete(){
          this.todos=this.todos.filter(todo=>!todo.complete)
        },
        
        //全选功能/全不选
        selecteAll(check){
          this.todos.forEach(todo=>todo.complete=check)

        },
        addTodo(todo){
          this.todos.push(todo)
        },
        deleteTodo(index){
          this.todos.splice(index,1)
        }
      }

  }


</script>

<style>
#container{
  width: 80%;
  margin: auto;
  margin-top: 4%;
}
</style>
