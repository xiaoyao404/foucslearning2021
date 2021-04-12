<template>

  <li @mouseenter='handleEnter(true)' @mouseleave='handleEnter(false)' :style="{background:bgColor}">  
    <label >
       <input  type="checkBox" v-model="todo.complete" />
        <span id="todoItem">{{todo.title}}</span>
    <button id="itemBtn" v-show='isShow' @click="deleteItem">删除</button><br><br>
      </label> 
  </li>

</template>


<script>
  export default{
    props:{
      todo:Object,
      index:Number,
      deleteTodo:Function
    },
    
    data(){
      return{
      bgColor:'white',//默认背景颜色
      isShow:false,//按钮是否显示

      }
    },
    methods:{
      handleEnter(isEnter){
          if(isEnter){
          this.bgColor='lightgray'
          this.isShow=true
        }else{
          this.bgColor='white'
          this.isShow=false
        }

      },

      deleteItem(){
        const {todo,index,deleteTodo}=this
        if(window.confirm(`确认删除${todo.title}吗？`)){
          deleteTodo(index)
        }
      }
    }

  }

</script>

<style>
li{
  margin-top:3% ;
  list-style: none;
}
#todoItem{
  padding-top:3%;
}
#itemBtn{
  background: lightskyblue;
  position:float;
  float: right;
  margin-top: 3%;
  margin-right: 2%;
}

</style>
