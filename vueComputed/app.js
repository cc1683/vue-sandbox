var vm = new Vue({
    el: '#app',
    data: {
        welcome: 'Vue Computed Properties',
        message: 'Reverse me',
        reversedMessage: '',
        teams: ['Brazil','Uruguay', 'Argentina', 'Colombia', 'Peru', 'Panama', 'Costa Rica', 'Mexico'],
        searchTeam: '',
    },
    methods: {
        reverseMessage: function() {
            this.reversedMessage = this.message.split('').reverse().join('');
        },
        clear: function() {
            this.reversedMessage = ''
        }
    },
    computed: {
        computedReversed() {
            return this.message.split('').reverse().join('');
        },
        searchTeamList() {
            // let filterCap = this.searchTeam
            let filterCap = new RegExp(this.searchTeam, 'i') // read capital letter
            return this.teams.filter(team => team.match(filterCap))
        }
    }
})