<template>

<div class='right'>

  <p><b>Comments</b></p>
  <!-- 3.引用 -->
  <Item v-for="(comment,index) in comments" :key='index' :comment='comment'  :deleteComment='deleteComment' />
  <h2 v-show='comments.length===0'>没有任何评论，请添加评论!!</h2>
</div>
</template>

<script>
//1.引入
import Item from './Item.vue'

export default{

  //声明接收属性
  props:['comments','deleteComment'],
   
   //映射
  components:{Item},

      data(){
        return{

        }
    }
    
}

</script>


<style>
 .right {
      overflow: hidden;
      height: 80%;
      width: 50%;
      background: lightyellow;

}

</style>