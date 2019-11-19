<template>
  <div id="app">
    <!-- <HelloWorld msg="第一个Vue" /> -->
    <app-header />
    <h1>App.vue</h1>
    <!-- 3. 局部调用组件 -->
    <users />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// 1. 局部引入组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  // 2. 注册组件
  components: {
    // HelloWorld
    Users,
    "app-header": Header,
    Footer
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
