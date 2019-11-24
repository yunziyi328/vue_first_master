<template>
  <div id="app">
    <!-- emit 在emit中注册了什么名字，此时就该使用什么名字"changeTitle" 右侧的值通知它触发了什么方法"updateTitle" -->
    <app-header @changeTitle="updateTitle" :title="title" />
    <h1>App.vue</h1>
    <Users :sbqusers="users" />
    <hr />
    <Users :sbqusers="users" />
    <Footer :title="title" />
  </div>
</template>

<script>
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
  components: {
    // HelloWorld
    Users,
    "app-header": Header,
    Footer
  },
  methods: {
    updateTitle(updatedTitle) {
      // console.log(updatedTitle);
      this.title = updatedTitle;
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
