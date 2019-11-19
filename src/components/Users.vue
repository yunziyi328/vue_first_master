<template>
  <div class="users">
    <ul>
      <!-- 遍历时，必须绑定key值，而且要唯一 -->
      <li @click="use.show = !use.show" v-for="(use, index) in users" :key="index">
        <h2>{{use.name}}</h2>
        <p v-show="use.show">{{use.age}}, {{use.job}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "科斯特", age: 28, job: "工程师", show: false },
        { name: "马斯顶", age: 30, job: "设计师", show: false },
        { name: "劳克斯", age: 55, job: "营养师", show: false },
        { name: "埃玛瑞", age: 10, job: "职业潜水者", show: false },
        { name: "或力气", age: 36, job: "司机", show: false }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>