<template>
    <article class="project-card flex flex--column">
        <header>
            <h1>{{ name }}</h1>
            <span class="flex star-container">
                <Star :width="starWidth" />
                <span>{{ this.starsGazers }}</span>
            </span>
        </header>
        <div class="body">
            {{ description }}
        </div>
        <Button :text="'View on Github'" :link="githubLink" />
    </article>
</template>

<script>
import Star from "./Star.vue";
import Button from "../Button.vue";

import GithubRepoDetails from "@/js/githubRepo.js";

export default {
    name: "ProjectCard",
    components: {
        Star,
        Button,
    },
    props: {
        name: String,
        link: String,
        githubLink: String,
        description: String,
    },
    data() {
        return {
            starWidth: 1.25,
        };
    },

    async setup(props) {
        const repoDetails = new GithubRepoDetails(props.link);
        let starsGazers = await repoDetails.getStars();
        // if stargazers are not available, then show "Rate Limit reached"
        if (starsGazers === null) {
            starsGazers = "Rate Limit reached";
        }
        return { starsGazers };
    },
};
</script>

<style scoped>
::selection {
    background: var(--text-color);
    color: #000;
}

article.project-card {
    --header-elms-size: 1.25rem;
}

.project-card {
    --alpha: 0.1;
    --primary-alpha: rgba(29, 38, 57, var(--alpha));

    /* background-color: var(--primary); */
    border: 4px solid var(--primary);
    /* min-height: 5rem; */
    height: fit-content;
    padding: 0.5em;
    border-radius: 0.5rem;

    /* background: var(--primary-alpha);    */
    backdrop-filter: saturate(180%) blur(10px);
    padding: 1em;
    width: 100%;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: var(--header-elms-size);
}

header h1 {
    font-size: 1.5rem;
    font-weight: 900;
}

.body {
    line-height: 1.5rem;
}

.star-container {
    gap: 0.5rem;
    align-items: center;
}
</style>
