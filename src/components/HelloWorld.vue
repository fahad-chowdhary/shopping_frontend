<template>
  <div>
<h3>{{textApi}}</h3>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      textApi : '',
    }
  },
  beforeMount(){
    this.firstApi()
  },
  methods:{
    firstApi(){
      console.log('First Api before')
      fetch("http://localhost:8081/firstBackend").then( (response)=> {
          return response.json()
      }).then((response)=>
      {
        this.textApi = response.text;
        console.log('First api', response);
      })
    }
  }
}
</script>
<style>

</style>

