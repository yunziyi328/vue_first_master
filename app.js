// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            name: '',
            age: ''
        };
    },
    methods: {
        onNameEnter() {
            this.name = this.$refs.refName.value;
        },
        onAgeEnter() {
            this.age = this.$refs.refAge.value;
        }
    }
});