// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {};
    },
    methods: {
        keyName() {
            console.log("名字正在输入。。。");
        },
        keyAge() {
            console.log("年龄正在输入。。。");
        },
        keyNameEnter() {
            console.log("名字正在输入。。。");
        },
        keyAgeEnter() {
            console.log("年龄正在输入。。。");
        }
    }
});