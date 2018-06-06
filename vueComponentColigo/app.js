Vue.use(Toasted, {
    duration: 3000
})

// simple component

Vue.component('greeting-component', {
    template:
        `
            <h5>Welcome to Vue Component</h5>
        `
});

// use html <template> tag to create component

Vue.component('greeting-template', {
    template: '#greeting-template'
});

// pass data to component with Props
Vue.component('child-component', {
    props: ['name'],
    template: 
        `
            <p>Welcome {{ name }}</p>
        `
});

// pass array with Props
Vue.component('array-component', {
    props: ['product'],
    template: 
        `
            <ul>
                <li>
                    {{ product.name }} || {{ product.price }}
                </li>
            </ul>
        `
});

// reddit-like post system
Vue.component('reddit-post', {
    props: ['post'],
    template: 
        `
            <li class="list-group-item">
                <button class="btn btn-raised" :class="(upvotedClass.disabled)? upvotedClass.upVote  : upvotedClass.downVote" @click="upvote">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <span class="label label-primary"> {{ votes }}</span>
                <button class="btn btn-raised" :class="(downvotedClass.disabled)? downvotedClass.downVote : downvotedClass.upVote" @click="downvote">
                    <i class="fas fa-arrow-down"></i>
                </button>
                <a> {{ post.comment }} </a>
            </li>
        `
    ,
    data() {
        return {
            upvotedClass : {
                disabled: false,
                upVote: 'btn-danger',
                downVote: 'btn-success'
            },
            downvotedClass: {
                disabled: false,
                upVote: 'btn-success',
                downVote: 'btn-danger'
            }
        }
    },

    methods: {
        upvote() {
            this.upvotedClass.disabled = !this.upvotedClass.disabled
            this.downvotedClass.disabled = false
            if(this.upvotedClass.disabled == true ) {
                this.$toasted.success('You upvoted '+this.post.comment)
            }
        },
        downvote() {
            this.downvotedClass.disabled = !this.downvotedClass.disabled
            this.upvotedClass.disabled = false
            if(this.downvotedClass.disabled == true ) {
                this.$toasted.error('You downvoted '+this.post.comment)
            }
        }
    },

    computed: {
        votes() { 
            if(this.upvotedClass.disabled) {
                return this.post.votes + 1
            }else if(this.downvotedClass.disabled) {
                return this.post.votes - 1
            }else {
                return this.post.votes
            }
        }
    }
})
    
new Vue({
    el: '#app',
    data: {
        products: [
            {name: 'iPhone', price: '$2000'},
            {name: 'Acer', price: '$1200'},
            {name: 'Samsung', price: '$1950'},
        ],

        posts: [
            {comment: 'A post for our reddit demo', votes: 20},
            {comment: 'Try out the upvoting', votes: 12},
            {comment: 'bomb!', votes: 33},
        ],

        comment: '',
        minPost: false
    },
    methods: {
        postComment() {
            if(this.comment) {
                this.posts.push({
                    comment: this.comment,
                    votes: 0
                })
                this.comment = ''
                this.$toasted.success('Comment post successfully')
                this.checkComment()
            }else {
                this.$toasted.error('You have to type something!')
            }
        },

        removeComment() {
            this.posts.pop()
            this.checkComment()
            this.$toasted.info('Comment has been deleted')
        },

        checkComment() {
            if(this.posts.length < 1) {
                this.minPost = true
            }else {
                this.minPost = false
            }
        }
    }
})