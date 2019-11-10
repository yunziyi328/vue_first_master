// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            a: 0,
            b: 0,
            age: 30
        };
    },
    methods: { // methods中的所有方法都会被运行
        // AddToA() {
        //     console.log('AddToA');
        //     return this.age + this.a;

        // },
        // AddToB() {
        //     console.log('AddToB');
        //     return this.age + this.b;
        // }
    },
    computed: { // 计算属性必须要有返回值 return
        AddToA() {
            console.log('AddToA');
            return this.age + this.a;

        },
        AddToB() {
            console.log('AddToB');
            return this.age + this.b;
        }
    }
});