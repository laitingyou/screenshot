<template>
   <div>
     <input
       class="input"
       type="text"
       @input="onInput"
       @keyup.13="submit"
       v-model="value"
     >
   </div>
</template>

<script>
  export default {
    name: "ss-input",
    data(){
      return {
        value:''
      }
    },
    methods:{
      onInput(e){
        this.$emit('onInput',e.target.value)
      },
      submit(e){
        this.$emit('onSubmit',this.value)
      }
    }
  }
</script>

<style scoped>
  .input{
    width: 670px;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    height: 44px;
    line-height: 44px;
    font-size: 20px;
    padding: 0 10px;
    color: #35495e;
    outline: none;
    transition: box-shadow 200ms cubic-bezier(0.4,0.0,0.2,1);
  }
  .input:hover {
    border-color: #3b8070;
  }
</style>
