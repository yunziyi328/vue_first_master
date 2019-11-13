// // 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            health: 100,
            ended: false
        };
    },
    methods: {
        punch() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
});