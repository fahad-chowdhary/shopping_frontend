<template>
  <section>
  <div>
<!-- <h3>{{textApi}}</h3> -->
<h2>Shopping Website</h2>
</div>
<section class="product_row">
<template v-for = "(item, itemindex) in Products">
<div class="card" :key="itemindex + 'products'">
  <img :src="item.image" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{item.title}}</b></h4> 
    <p>{{item.category}}</p> 

    <div class="card_btn">
      <button class="buy_now_btn">Buy Now</button>
      <button class="addbtn">Add to Cart</button>
      <button class="knowbtn" @click="productDescription(item.id)">Know More...</button>
    </div>
  </div>
</div>
</template>
</section>
</section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      textApi : '',
      Products:[],
      ProductDetails:[],
    }
  },
  beforeMount(){
    this.firstApi();
    this.productsapi();
  },
  methods:{

    productDescription(id){
      // fetch(`http://localhost:3000/getProductDetails?id=${id}`).then((response) => {
      //   response.json()
      // }).then((response)=>{
      //   this.ProductDetails = response
      //   this.$router.push('/ProductDescription?id=${}')
      //   console.log('Detail Page',response)
      // })
      this.$router.push(`/ProductDescription/${id}`)
    },
    firstApi(){
      console.log('First Api before')
      fetch("http://localhost:8081/firstBackend").then( (response)=> {
          return response.json()
      }).then((response)=>
      {
        this.textApi = response.text;
        console.log('First api', response);
      })
    },

    productsapi(){
        fetch("http://localhost:3000/getProducts").then((response)=>{
          return response.json()
        }).then((response) =>{
          this.Products = response
            console.log('Products',response)
        })
    }
  }
}
</script>
<style>

</style>

