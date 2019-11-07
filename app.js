// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            age: 30
        };
    },
    methods: {
        // greet: function () {
        //     return 'Good night' + this.name;
        // }
        greet(time) {
            // return "另一种方法: " + this.name;
            return `Good ${time} ${this.name}`
        },
        havaLunch() {
            return `夕食を食べたの？`;
        }
    }
});