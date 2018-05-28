// define a new component
Vue.component('new-component', {
    template: 
        `
            <div>
                <h5>This is the component</h5>
            </div>       
        `
});

// another component
Vue.component('button-click-component', {
    template:
        `
            <div>
                <button class="btn btn-raised btn-primary" @click="count++">You clicked me {{ count }} time.</button>
                <button class="btn btn-raised btn-danger" @click="count=0">Reset</button>
            </div>
        `
    ,
    data: function() {
        return {
            count: 0
        }
    }
});

// pass data into component
// Vue.component('blog-post', {
//     template:
//         `   
//             <p>{{ title }} by {{ author }}</p>
//         `
//     ,
//     props: ['title', 'author']
// });

Vue.component('blog-post', {
    template:
        `
            <div>
                <div v-for="post in posts">
                    <h5>{{ post.title }} by {{ post.author }}</h5>
                    <div>
                        <p>{{ post.content }}</p>
                    </div>
                </div>
            </div>
        `
    ,
    data: function() {
        return {
            posts: [
                {id: 1, title: 'New post #1', author: 'luis', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
                {id: 2, title: 'New post #2', author: 'albert', content: 'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc'},
            ]
        }
    },
    props: []
});

Vue.component('name-list', {
    template:
        `
            <p> {{ name.id }} : {{ name.fname }} </p>
        `
    ,
    props: ['name']
})

var app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello Vue',
        messages: 'You loaded this page on '+ new Date().toLocaleString(),
        seen: true,
        todoMessage: 'ToDo List',
        todos: [
            {text: 'Learn Javascript'},
            {text: 'Learn VueJS'},
            {text: 'Build something awesome'},
        ],
        todoInputStatus: 'Add todo item here',
        todoAdd: '',
        btnAddStatus: false,
        btnRemoveStatus: false,
        btnStatus: 0,
        names: [
            {id: 1, fname: 'luis'},
            {id: 2, fname: 'bob'},
            {id: 3, fname: 'carl'},
            {id: 4, fname: 'henry'},
        ],
    },
    methods: {
        makeDisappear: function() {
            this.seen = false;
        },
        makeAppear: function() {
            this.seen = true;
        },
        insertTodo: function() {
            if(this.todoAdd.length != 0) {
                this.todos.push(
                    {text: this.todoAdd}
                );
                this.todoAdd = '';
                this.checkBtnStatus();
            }else if(this.todoAdd.length <= 0) {
                alert('Please insert data')
                return
            }
        },
        removeTodo: function() {
            this.todos.pop(
                {text: this.todoAdd}
            );
            this.todoInputStatus = 'Add todo item here'
            this.checkBtnStatus();
        },
        checkBtnStatus: function() {
            this.btnStatus = this.todos.length
            switch(this.btnStatus) {
                case 0:
                    this.btnRemoveStatus = true;
                    break;
                case 5:
                    this.todoInputStatus = 'No more todo item';
                    this.btnAddStatus = true;
                    break;
                default:
                    this.btnAddStatus = false;
                    this.btnRemoveStatus = false;
                    break; 
            }
        }
    }
})
