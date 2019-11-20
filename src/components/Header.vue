<template>
  <div class="header">
    <h1>{{title}}</h1>
    <!-- 传值 影响当前的属性 -->
    <button @click="changeTitle">更改题目</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      // title: "Vue Components Demo"
    };
  },
  methods: {
    changeTitle() {
      this.title = "xxx";
    }
  }
};
</script>

<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>