// // 实例化vue对象
const vueOne = new Vue({
    el: "#vue-app-one", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            title: '第一个容器'
        };
    },
    methods: {},
    computed: {}
});

const vueTwo = new Vue({
    el: "#vue-app-two", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            title: '第二个容器'
        };
    },
    methods: {
        ChangeAppOne() {
            vueOne.title = "这是vueOne的title"
        }
    },
    computed: {}
});

// 在外部改变vueTwo的内容
// vueTwo.title = "这是vueTwo的title"