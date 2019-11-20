<template>
  <div class="users">
    <!-- <p>{{sbqusers}}</p> -->
    <ul>
      <!-- 遍历时，必须绑定key值，而且要唯一 -->
      <li @click="use.show = !use.show" v-for="(use, index) in sbqusers" :key="index">
        <h2>{{use.name}}</h2>
        <p v-show="use.show">{{use.age}}, {{use.job}}</p>
      </li>
    </ul>
    <!-- 传引用 会影响多处属性的值-->
    <button @click="deleteUser">删除用户</button>
  </div>
</template>

<script>
export default {
  // props: ["sbqusers", "sbqusers2"], // 从父组件接收过来的值
  // 不同的写法
  props: {
    sbqusers: {
      type: Array,
      required: true
    },
    sbqusers2: {}
  },
  methods: {
    deleteUser() {
      this.sbqusers.pop();
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>