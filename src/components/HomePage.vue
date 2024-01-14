<template>
   <h1>Hello welcome to home page</h1>
</template>

<script>
   export default {
       name: 'HomePage',
       mounted(){
         let user = localStorage.getItem('User-Info');
         if(!user){
           this.$router.push({name: "SignUp"})
         }
       }
   }
</script>

<style>

</style>