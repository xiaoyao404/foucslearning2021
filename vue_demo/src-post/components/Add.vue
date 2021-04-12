<template>

<div class='left'>
  <p><b>Add Comment</b></p>

  <form>
    <div id="userName">
      <label for="name">用户名</label>
      <input type="text" v-model="name" placeholder="用户名"><br><br>
    </div>

    <div id="userComment">
      <label for="name" >评论内容</label><br><br>
      <textarea rows="6" v-model="content" placeholder="评论内容"></textarea>
      <button  type="biutton" @click="add">提交</button>
    </div>

  </form>
</div>

</template>


<script>

export default{
  props:{
  addComment:{
  type:Function,
  required:true,
}

  },
  data(){
    return{
      name:'',
          content:''
        }
    },
  methods:{
            //1.检查输入的合理性
            add(){
              const name=this.name.trim()
              const content=this.content.trim()
              if(!name||!content){
                alert('姓名或评论不能为空值')
                return
              }

                //2.根据输入数据，封装一个comment对象
              const comment={
                name, 
                content,
              }
                //3.添加到comment

              this.addComment(comment)

              //4.清除值
              this.name=''
              this.content=''
        
            },
            },
    


}

</script>


<style>

.left {
      float:left;
      display: block;
      width: 50%;
      height: 80%;
      background:lightsteelblue;
    }

    #userName{
      width: 80%;
      margin-left: 5%;
      margin-bottom: 3%;
      padding-left: 3%;
      padding-top:3% ;
      border: 2px solid gray;
    }
    #userComment{
      width: 80%;
      padding-left: 3%;
      padding-top:3% ;
      padding-bottom:3% ;
      margin-left: 5%;
      margin-bottom: 3%;
      border: 2px solid gray;
    }


</style>