<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>微信：{{weChat}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "名前",
      weChat: "2772357"
    };
  }
  // props: {
  //   msg: String
  // }
};
</script>

<style scoped>
</style>
