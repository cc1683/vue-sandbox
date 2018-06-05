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
})


new Vue({
    el: '#app',
    data: {

    }
})