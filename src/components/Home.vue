<template>
    <div>
        <h1>Home</h1>
      
        <button @click="About" >Go to TO-DO-LIST</button>
    </div>
</template>
<script>
export default {
    methods: {
     
        About(){
            const self=this ;
            setTimeout(function(){
                self.$router.push("/produits");
            },1000 );
            
        }
    },
  
      beforeRouteLeave(to, from, next) {
            if(confirm("sure!!")){
                next();
            }
        },
}
</script>
<style lang="">
    
</style>
