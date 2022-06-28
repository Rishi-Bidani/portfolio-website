<template>
    <aside>
        <header>
            <h1>WHAT I'M WORKING ON</h1>
            <img :src="gitIcon" alt="" class="icon" />
        </header>
        <section>
            <article class="card-container">
                <HorizontalRule :text="'My favourite projects'" />
                <Suspense>
                    <template #default>
                        <FavouriteProjectCard
                            v-for="project in FavouriteProjects"
                            :key="project.name"
                            :name="project.name"
                            :link="project.apiURL"
                        />
                    </template>
                    <template #fallback>
                        <p>Loading...</p>
                    </template>
                </Suspense>
            </article>
        </section>
    </aside>
</template>

<script>
// import GithubEvents from "@/js/githubEvents.js";

import HorizontalRule from "./HorizontalRule.vue";

import gitIcon from "@/assets/images/git.svg";
import FavouriteProjectCard from "./FavouriteProjectCard.vue";

export default {
    name: "GithubDetails",
    components: {
        HorizontalRule,
        FavouriteProjectCard,
    },
    data() {
        return {
            FavouriteProjects: [
                {
                    name: "Local Cloud",
                    apiURL: "https://api.github.com/repos/Rishi-Bidani/local-cloud",
                    repoURL: "https://github.com/Rishi-Bidani/local-cloud",
                },
                {
                    name: "Cloud Sync",
                    apiURL: "https://api.github.com/repos/Rishi-Bidani/CloudSync",
                    repoURL: "https://github.com/Rishi-Bidani/CloudSync",
                },
            ],
            // Github
            // githubEvents: this.getGithubPushEvents(),

            // Images
            gitIcon: gitIcon,
        };
    },

    methods: {
        // Github
        // async getGithubPushEvents() {
        //     const pushEvents = await GithubEvents.push();
        //     return pushEvents;
        // },
    },
};
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-block: 2em;
}

header h1 {
    font-size: 1rem;
    letter-spacing: 1px;
    /* font-weight: 500; */
}

.icon {
    height: 1.5rem;
}
</style>
