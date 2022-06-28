const githubAPI = "https://api.github.com/users/Rishi-Bidani/"

export default class GithubEvents {
    static URL = githubAPI + "events";
    static allEvents = GithubEvents.all();

    static async all() {
        const response = await fetch(GithubEvents.URL);
        const allEvents = response.json()
        return allEvents;
    }

    static async push() {
        const pushEvents = (await GithubEvents.allEvents).filter(item => item.type == "PushEvent");
        return pushEvents;
    }
}
