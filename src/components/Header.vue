<template>
  <div @click="changeTitle" class="header">
    <h1>{{title}}</h1>
    <!-- 传值 影响当前的属性 -->
    <!-- <button @click="changeTitle">更改题目</button> -->
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
      // this.title = "xxx";  在子组件中不可强行修改父组件的内容
      // emit 1. 所以需要通过$emit去修改父组件的内容
      // 注册事件 参数1：需要修改的参数名字，参数2：需要修改的参数值
      this.$emit("changeTitle", "我修改了参数值");
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