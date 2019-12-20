<template>
  <div id="app">
    <Navibar></Navibar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navibar from "./components/Navibar";
  import Footer from "./components/Footer"

  export default {
    name: 'app',
    components: {Footer, Navibar},
  }
</script>

<style>
  @import "assets/css/main.css";
#app {
  margin-top: 60px ;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
