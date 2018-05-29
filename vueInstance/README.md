## The Vue Instance
---
Every Vue application start by creating a new **Vue Instance** aka **root Vue Instance** with the **Vue** function.
```javascript
var vm = new Vue({
    el: '',
    data: ,
})
```
All components are also **Vue Instance**.

### [Data and Methods] ###
When a new Vue instance is created, it add all the properties found in the data object to Vue's reactivity system.
```javascript
var data = {
    name: 'luis'
}
var vm = new Vue({
    el: '#app',
    data: data
})
vm.name === data.name = true
```
If want to prevent track change, add **Object.freeze()** which prevents existing properties from being change.
```javascript
var data = {
    name: 'bar'
}
Object.freeze(data)
var vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        changeValue() {
            this.data.name = 'boo'
        }
    }
})
console.log(data.name) // bar
```
Use prefixed with **$** to differentiate between instance properties and user-defined properties.
```javascript
var data = {
    a: 1
}
var vm = new Vue({
    el: '#app',
    data: data
})
vm.$data === data = true
vm.$el === document.getElementById("app") = true
```

### [Instance Life Cycle Hooks] ###
1. created
```javascript
var app = new Vue({
    el: '#app',
    data: ,
    created: function() {
        console.log('I run after an instance was created')
    }
})
```

