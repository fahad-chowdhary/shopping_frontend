<template>
    <h3>Description Page</h3>
</template>
<script>
    export default {
  name: 'ProductDescription',
  beforeMount(){

    this.productDescription(this.$route.params.id)
    console.log('Params',this.$route.params.id)
  },
  methods:{
    productDescription(id){
      fetch(`http://localhost:3000/getProductDetails?id=${id}`).then((response) => {
        response.json()
      }).then((response)=>{
        this.ProductDetails = response
        // this.$router.push('/ProductDescription?id=${}')
        console.log('Detail Page',response)
      })
      // this.$router.push(`/ProductDescription/${id}`)
    },
  }
    }
   
</script>