Vue.component('user-name-login', {
    template:
        `
            <div>
                <label for="username">Use username to login: </label>
                <input type="text" name="username">
                <button class="btn btn-primary">Login</button>
                <button class="btn btn-raised btn-info" @click="$emit('hide')">Use email to login</button>
            </div>
        `
});

Vue.component('user-email-login', {
    template:
        `
            <div>
                <label for="useremail">Use email to login: </label>
                <input type="text" name="useremail">
                <button class="btn btn-primary">Login</button>
                <button class="btn btn-raised btn-info" @click="$emit('hide')">Use username to login</button>
            </div>
        `
})

var app = new Vue({
    el: '#app',
    data: {
        ok: 'false',
        loginType: 'username'
    }
})