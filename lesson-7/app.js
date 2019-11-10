// 实例化vue对象
new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            age: 30,
            x: 0,
            y: 0,
            // clickB: '<a href="https://www.baidu.com">BaiDu</a>'
        };
    },
    methods: {
        add(ad) {
            this.age += ad;
        },
        subtract(cd) {
            this.age -= cd;
        },
        moveXY(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        clickB() {
            alert("aaa")
        }
    }
});