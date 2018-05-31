var app = new Vue({
    el: '#app',
    data: {
        welcome: 'Vue Template Syntax',
        message: 'This is message',
        staticMessage: 'This message cannot be change',
        rawHTML: '<span style="color: blue">This is HTML raw.</span>',
        disabled: true,
    }
})