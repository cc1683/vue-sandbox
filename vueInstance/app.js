var nameObj = {
    username: 'lorem lipsum'
}
/// demo
var numObj = {
    num1: 10
}
///demo for Object.freeze()
var fObj = {
    num2: 100
}
Object.freeze(fObj)
/// another demo for Object.freeze()
var fname = {
    name: 'bar'
}
Object.freeze(fname)

var app = new Vue({
    el: '#app',
    data: {
        welcome: 'Vue Home',
        button: 'btn-success',
        btnMessage: 'Click me',
        nameObj,
        newUsername: '',
        numObj,
        fObj,
        fname,
        hooks: ['created', 'mounted', 'updated', 'destroyed'], 
    },
    methods: {
        changeButtonStatus: function() {
            let currentStatus = this.button
            if(currentStatus === 'btn-success') {
                this.button = 'btn-danger'
                this.btnMessage = 'Click me again'
            } else {
                this.button = 'btn-success'
                this.btnMessage = 'Click me'
            }
        },
        changeUsername: function() {
            if(this.newUsername.length != 0) {
                this.nameObj.username = this.newUsername
            }else if(this.newUsername.length <= 0) {
                alert('Please insert data')
                return
            }
        },
        clearInput() {
            this.newUsername = ''
        },
        resetInput() {
            this.newUsername = ''
            this.nameObj.username = 'lorem lipsum'
        },
        changeName() {
            this.fname.name = 'boo'
        },     
    },
    created: function() {
        console.log('I run after an instance was created')
    }
})

/* ==================================== */

// var data = {
//     a: 1
// }
// var vm = new Vue({
//     data: data
// })
// vm.a == data.a = true

/*
    Object.freeze() prevents existing properties from being change
    vm.a == data.a = false
*/

/* ====================================== */

