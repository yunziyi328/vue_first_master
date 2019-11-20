<template>
  <div id="app">
    <!-- <HelloWorld msg="第一个Vue" /> -->
    <app-header :title="title" />
    <h1>App.vue</h1>
    <!-- 3. 局部调用组件 -->
    <!-- sbqusers的内容传给子组件 -->
    <Users :sbqusers="users" />
    <hr />
    <Users :sbqusers="users" />
    <Footer :title="title" />
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
  data() {
    return {
      users: [
        { name: "科斯特", age: 28, job: "工程师", show: false },
        { name: "马斯顶", age: 30, job: "设计师", show: false },
        { name: "劳克斯", age: 55, job: "营养师", show: false },
        { name: "埃玛瑞", age: 10, job: "职业潜水者", show: false },
        { name: "或力气", age: 36, job: "司机", show: false }
      ],
      title: "爱美丽"
    };
  },
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
