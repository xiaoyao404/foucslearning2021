<template>
<li id="item">
  <div id="deleteBtn">

    <!-- hred='javascript：'是一个伪元素 -->
  <a href="javascript:;"  @click="deleteItem">删除</a>
  </div>
  <p>  {{comment.name}}</p>
  <p>  {{comment.content}}</p>
</li>


</template>


<script>

export default{

  props:{
comment:Object,
deleteComment:Function,
index:Number
},
  methods:{
  deleteItem(){
    const {comment,index,deleteComment}=this
    if(window.confirm(`确定删除 ${comment.name} 的评论吗`)){
        deleteComment(index)

    }

  }
},
  data(){
        return{ 

        }
    }
    
}

</script>


<style>
#item{
  border: 2px solid black;
  margin-left: 2%;
  margin-bottom:2% ;
  padding-left: 2%;

}
#deleteBtn{
  margin-top: 3%;
  margin-right: 3%;
  position:float;
  float:right;
}
li{list-style-type:none}
</style>