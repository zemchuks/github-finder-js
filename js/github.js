//dealing with Fetch API
class Github {
    constructor() {
        //this client id & secret is Oauth from github so as not to max out the number of API calls.. as the limit is 100.
        this.client_id = 'af0dc1cb202fdcb0a913'
        this.client_secret = '7fc94311a6556d1c7b2c819bdb7f1e62589570d8'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    //Fetching user profile
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)

        //Fetching user Repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`)


        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            profile,
            repos
        }
    }
}