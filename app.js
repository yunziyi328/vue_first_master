new Vue({
    el: "#vue-app", // element 对应index.html的id="vue-app" 可操作的id容器
    data() {
        return {
            todos: [],
            todo: {
                title: '',
                completed: false
            }
        };
    },
    // 勾的函数 在页面还没有渲染之前就可以执行的东西
    mounted() {
        // fetch api请求接口
        fetch('http://jsonplaceholder.typicode.com/todos').then(res => {
            return res.json()
        }).then(todos => {
            this.todos = todos;
        });
    },
    methods: {
        onSubmit() {
            fetch('http://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(this.todo),
                headers: {
                    'Content-type': 'application / json'
                }
            }).then(res => {
                return res.json()
            }).then(todo => {
                this.todos.unshift(todo);
            });
        }
    }
});