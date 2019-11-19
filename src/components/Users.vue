<template>
  <div class="users">
    <ul>
      <!-- 遍历时，必须绑定key值，而且要唯一 -->
      <li v-for="(use, index) in users" :key="index">{{use}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["女孩小红帽", "狮子辛巴", "三只小猪"]
    };
  }
};
</script>

<style>
</style>