export default class GithubRepoDetails {
    // https://api.github.com/users/Rishi-Bidani/repos
    constructor(apiLink) {
        this.link = apiLink;
        this.repoDetails = this.#getRepoDetails();
    }

    async #getRepoDetails() {
        const response = await fetch(this.link);
        return response.json();
    }

    async getStars() {
        const stars = (await this.repoDetails).stargazers_count;
        return stars;
    }
}