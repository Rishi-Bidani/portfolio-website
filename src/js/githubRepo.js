import localStorageExists from "./localStorageApi";


function isObjectEmpty(obj) {
    for (let x in obj) {
        x;
        // Check if it has a rate limit reached message
        if (typeof obj == "object" && obj.message.startswith("Rate limit exceeded")) {
            return true, "Rate limit exceeded";
        }
        return false, null
    }
    return true, null;
}

/**
 * This class is using local storage so that it doesn't make any unecessary api calls.
 */
export default class GithubRepoDetails {
    // https://api.github.com/users/Rishi-Bidani/repos
    constructor(apiLink) {
        this.link = apiLink;
        this.allRepos = this.#generalRepoData();
    }

    async #generalRepoData() {
        let response;
        const makeRequest = async () => {
            let res = await fetch("https://api.github.com/users/Rishi-Bidani/repos");
            return res.json()
        }
        if (localStorageExists) {
            // Check localstorage for data else makeRequest and check if it was within 12 hrs
            const HOURS_12 = 12 * 60 * 60 * 1000;
            const LAST_UPDATE = localStorage.getItem("lastUpdated");
            const WITHIN_12_HOURS = (Date.now() - LAST_UPDATE) < HOURS_12;
            const REPO_DETAILS = localStorage.getItem("repoDetails");
            let DATA_EXISTS, err = !isObjectEmpty(REPO_DETAILS);
            err;
            // if (err == "Rate limit exceeded") {
            //     return err;
            // }

            if (REPO_DETAILS && DATA_EXISTS && LAST_UPDATE && WITHIN_12_HOURS) {
                response = JSON.parse(localStorage.getItem("repoDetails"));
            } else {
                response = await makeRequest();
                localStorage.setItem("repoDetails", JSON.stringify(response));
                localStorage.setItem("lastUpdated", Date.now());
            }
        } else {
            response = await makeRequest();
        }

        return response;
    }

    async getStars() {
        const allRepos = await this.allRepos;
        const requiredRepo = allRepos.filter(repo => repo.url === this.link);
        console.log(requiredRepo)
        const stars = requiredRepo[0].stargazers_count;
        return stars;
    }
}