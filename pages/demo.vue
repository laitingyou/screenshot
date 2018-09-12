<template>
   <div class="wrapper">
     <h1 class="title">
       Screenshot
     </h1>
     <ss-input @onSubmit="onSubmit"></ss-input>
   </div>
</template>

<script>
  import SsInput from '~/components/Input.vue'
  export default {
    name: "demo",
    components: {
      SsInput
    },
    asyncData(context){
      return {
        title: 123
      }
    },
    mounted(){
      console.log(24243424)
    },
    methods:{
      onSubmit(value){
        console.log(value)
      }
    }

  }
</script>

<style scoped>
    .wrapper{
      text-align: center;
    }
    .title {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
      margin-top: 10rem;
    }
</style>
