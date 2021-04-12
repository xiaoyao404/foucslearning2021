<template>
<div id="todoHeader">
    <p>TodoHeader</p>
   <input id="todoInput" type="text" placeholder="请输入未完成任务，按回车键添加"  @keyup.enter='addItem' v-model="title" >
</div>

  
</template>


<script>


  export default{
    props:{
      addTodo:Function
    },
    data(){
      return{
        inputTodo:' ',
        title:''
      }
    },

    methods:{

      addItem(){
//1.检查输入
        const title=this.title.trim()
        
        if(!title){
          alert('必须输入！' )
          return
        }
        //创建todo对象
        const todo={
          title,
          complete:false
        }
        //添加到todos
        this.addTodo(todo)

        //清除输入
        this.title=''

      }

    }

  }


</script>

<style>

#todoHeader{
  margin:auto;
  border: 2px solid gray;
  width: 80%;
}
#todoInput {
  width: 60%;
  height: 30px;
}
input:focus{
  border-style:solid;
  border-color:lightskyblue;
	box-shadow: 0 0 15px lightskyblue;}
</style>
