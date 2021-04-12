<template>
<div id="parent">
<h1>请发表关于男篮的评论</h1>
    <Add :addComment="addComment" />
    <List :comments="comments"  :deleteComment='deleteComment'  />
</div>
</template>


<script>
import Add from './components/Add.vue' 
import List from './components/List.vue'
export default{
    data(){
        return {
    //数据在哪个组件，更新数据的行为就定义在在哪个组件
    comments:[
     {     name:'Miller',
      content:'打的不错'},
     {     name:'Anny',
      content:'比国足强'},
     {     name:'Bob',
      content:'打的一般'},
     {     name:'Cody',
      content:'换我来'},
    ]
        }

    },
    methods:{
        //添加评论
    addComment(comment){
        this.comments.unshift(comment)      

    },
        //删除评论
    deleteComment(index){
        this.comments.splice(index,1)
            }
    },
    components:{
        Add,
        List,
    }               
}

</script>


<style>


</style>