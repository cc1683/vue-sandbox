# Vue Introduction #

## Installation ##
### [ CDN ] ### 
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```
### [ npm ] ###
```bash
npm install vue
```

## Vue Example ##
---
### [ Shorthand ] ###
```javascript
v-bind:title="title" -> :title="title"
v-on:click="callFunctionHere" -> @click="callFunctionHere"
```

### [ Initiate root instance ] ###
```javascript
var app = new Vue({
    el: '#app',
    data: {
        title: 'this is title',
        message: 'this is message content',
        showContent: true,
        lists: [
            {id: 1, name: 'albert'},
            {id: 2, name: 'bob'},
            {id: 3, name: 'carl'},
        ],
        username: '',
    },
    methods: {
        changeContentStatus: function() {
            this.showContent = false
        }
    }
})
```
1. Declarative Rendering
```html
<p v-bind:title="title">{{ message }}</p>
```

2. Conditionals
```html
<p v-if="showContent">This content is showing now</p>
```

3. Loop
```html
<ol>

    <li v-for="list in lists">{{list.id}} : {{list.name}}</li>
</ol>
```

4. Handle User Input
```html
<label for="username">
<input type="text" name="username" v-model="username" placeholder="Enter your username here">
<p>Your username: {{ username }}</p>
```

5. Click event
```html
<button v-on:click="changeContentStatus">Disappear the content</button>
```

6. Basic Component
---
In html
```html
<custom-component></custom-component>
```
In js
```html
Vue.component('custom-component' {
    template:
    `
        <div>this is a custom component</div>
    `
})
```
---
Passing data into component
```html
<name-component :name="luis"></name-component>
```
```html
Vue.component('name-component', {
    props: ['name'],
    template:
        `
            <p>My name is {{ name }}</p>
        `
})
```
