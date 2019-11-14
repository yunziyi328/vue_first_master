// 全局变量
let dataAll = {
    name: 'XXX',
    wechat: '27732357'
};

// 创建全局组件
Vue.component('Greeting', {
    // html模板
    template: `
    <p>
    这是全局组件，可以在任何实例的容器中使用
    私の名前： {{name}}, wechat: {{wechat}}
    <button @click="changeName">改名</button>
    </p>
    `,
    // 属性 方法等
    data() {
        // return {
        //     name: 'XXX',
        //     wechat: '27732357'
        // };
        return dataAll;
    },
    methods: {
        changeName() {
            this.name = "YYY"
        }
    }
})

const one = new Vue({
    el: "#vue-app-one", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            title: '第一个容器'
        };
    },
    methods: {},
    computed: {}
});

const two = new Vue({
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