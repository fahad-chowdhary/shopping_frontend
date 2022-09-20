<template>
    <div>
    <h3>Description Page</h3>
<template v-for = "(item, itemindex) in Products">
    <div  
     :key="itemindex"
    class="">
    <img :src="item.image" alt="Avatar" style="width:100%">
    </div>
  </template>
  </div>
</template>
<script>
    export default {
  name: 'ProductDescription',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      textApi : '',
      Products:[],
      ProductDetails:[],
    }
  },
  beforeMount(){

    this.productDescription(this.$route.params.id)
    console.log('Params',this.$route.params.id)
  },
  methods:{
    productDescription(id){
      fetch(`http://localhost:8081/getProductDetails?id=${id}`).then((response) => {
        response.json()
      }).then((response)=>{
        this.ProductDetails = response
        // this.$router.push('/ProductDescription?id=${}')
        console.log('Detail Page',response)
      })
      // this.$router.push(`/ProductDescription/${id}`)
    },
    productsapi(){
        fetch(`https://fakestoreapi.com/products`).then((response)=>{
          return response.json()
        }).then((response) =>{
          this.Products = response
            console.log('Products',response)
        })
    }
  }
    }
   
</script>