<template>
    <article class="favourite-project-card">
        <header>
            <h1>{{ name }}</h1>
            <span class="flex star-container">
                <Star :width="starWidth" />
                <span>{{ this.starsGazers || "Rate Limit reached" }}</span>
            </span>
        </header>
        <div class="body"></div>
    </article>
</template>

<script>
import Star from "./Star.vue";

import GithubRepoDetails from "@/js/githubRepo.js";

export default {
    name: "FavouriteProjectCard",
    components: {
        Star,
    },
    props: {
        name: String,
        link: String,
    },
    data() {
        return {
            starWidth: 1.25,
        };
    },

    async setup(props) {
        const repoDetails = new GithubRepoDetails(props.link);
        const starsGazers = await repoDetails.getStars();
        return { starsGazers };
    },
};
</script>

<style scoped>
article.favourite-project-card {
    --header-elms-size: 1.25rem;
}

.favourite-project-card {
    background-color: var(--primary);
    min-height: 5rem;
    margin-block: 1rem;
    padding: 0.5em;
    border-radius: 1rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: var(--header-elms-size);
}

.star-container {
    gap: 1rem;
    align-items: center;
}
</style>
