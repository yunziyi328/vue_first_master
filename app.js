// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            mrChangeColor: true,
            mrchangeLength: false
        };
    },
    methods: {},
    computed: {
        comColor() {
            return {
                changeColor: this.mrChangeColor,
                changeLength: this.mrchangeLength
            };
        }
    }
});