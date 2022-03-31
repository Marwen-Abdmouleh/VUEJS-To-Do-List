<template>
    <ul class="nav nav-pills">

  <li class="nav-item">
    <router-link to="/" class="nav-link" active-class="active"  exact >Home</router-link>
  </li>

  <li class="nav-item">

     <router-link  :to="{name :'Produit'}"  class="nav-link" active-class="active" href="#">TO-DO-LIST</router-link>

  </li>

  
</ul>

</template>
<script>
export default {

  }
</script>