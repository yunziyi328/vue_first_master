<template>
  <div id="app">
    <!-- <HelloWorld msg="第一个Vue" /> -->

    <!-- 3. 局部调用组件 -->
    <users />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// 1. 局部引入组件
import Users from "./components/Users";

export default {
  name: "app",
  // 2. 注册组件
  components: {
    // HelloWorld
    users: Users
  }
};
</script>

<style>
</style>
