<template>
<div>


<h2>{{message2}}</h2>
<h2>{{counter2}}</h2>
</div>

    
</template>


<script>

export default {
    name:'HelloVuex',
    props:{
        counter2:Number
    },
    data(){
        return{
            message2:'子组件',
            
        }
    }


}
</script>

<style >

</style>
