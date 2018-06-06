<template>
  <div id="app">
    <img src="./assets/the_face.jpg">
    <mainMenu />
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    mainMenu: Menu
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Indie+Flower");
html {
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
body {
  font-family: "Indie Flower", cursive;
  background-image: url("./assets/the_man.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  @media screen and (max-width: 1200px) {
    background-size: 8rem;
  }
  @media screen and (max-width: 1024px) {
    background-size: 2.5rem;
  }
  #app {
    text-align: center;
    margin-top: 5rem;
  }
}
</style>
