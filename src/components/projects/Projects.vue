<template>
    <section class="projects">
        <header>
            <h2>My Projects</h2>
            <img :src="gitIcon" alt="" class="icon" />
        </header>
        <section>
            <article class="card-container">
                <HorizontalRule :text="'My favourite projects ❤️'" />
                <div class="cards">
                    <Suspense>
                        <template #default>
                            <ProjectCard
                                v-for="project in FavouriteProjects"
                                :key="project.name"
                                :name="project.name"
                                :link="project.apiURL"
                                :githubLink="project.repoURL"
                                :description="project.description"
                            />
                        </template>
                        <template #fallback>
                            <LoadingProjectCard />
                        </template>
                    </Suspense>
                </div>
            </article>
            <article class="card-container">
                <HorizontalRule :text="'A cool script 😎'" />
                <div class="cards">
                    <Suspense>
                        <template #default>
                            <ProjectCard
                                :name="'PDF Opener'"
                                :link="'https://api.github.com/repos/Rishi-Bidani/pdf-opener'"
                                :githubLink="'https://github.com/Rishi-Bidani/pdf-opener'"
                                :description="'A simple script written in Powershell, to open all pdfs in particular folder in your choice of viewer. It currently supports Chrome, Edge and Adobe Reader'"
                            />
                        </template>
                        <template #fallback>
                            <!-- <p>Loading...</p> -->
                            <LoadingProjectCard />
                        </template>
                    </Suspense>
                </div>
            </article>
            <article class="card-container">
                <HorizontalRule :text="'Something useful'" />
                <div class="cards">
                    <Suspense>
                        <template #default>
                            <ProjectCard
                                :name="'Web Notepad'"
                                :link="'https://api.github.com/repos/Rishi-Bidani/web-notepad'"
                                :githubLink="'https://github.com/Rishi-Bidani/web-notepad'"
                                :description="'If you spend a lot of time on your browser, you might want a quick notepad application accessible right in your browser. This is a minimal note taking website with some keyboard shortcuts.'"
                            />
                        </template>
                        <template #fallback>
                            <!-- <p>Loading...</p> -->
                            <LoadingProjectCard />
                        </template>
                    </Suspense>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
// import GithubEvents from "@/js/githubEvents.js";

import HorizontalRule from "./HorizontalRule.vue";

import gitIcon from "@/assets/images/git.svg";
import ProjectCard from "./ProjectCard.vue";
import LoadingProjectCard from "./LoadingProjectCard.vue";

export default {
    name: "Projects",
    components: {
        HorizontalRule,
        ProjectCard,
        LoadingProjectCard,
    },
    data() {
        return {
            FavouriteProjects: [
                {
                    name: "Local Cloud",
                    apiURL: "https://api.github.com/repos/Rishi-Bidani/local-cloud",
                    repoURL: "https://github.com/Rishi-Bidani/local-cloud",
                    description:
                        "Using this program you can convert any computer into a home server for sharing files across all your devices- connected on the same network. Since this hosts a website locally it is therefore platform independent.",
                },
                {
                    name: "Cloud Sync",
                    apiURL: "https://api.github.com/repos/Rishi-Bidani/CloudSync",
                    repoURL: "https://github.com/Rishi-Bidani/CloudSync",
                    description:
                        "This program will allow you to host your own cloud. It will let you to watch a folder on your computer and upload those files directly to the cloud. The goal is to create something similar to google drive's desktop client",
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
.card-container {
    display: flex;
    flex-direction: column;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.cards > * {
    flex: 1 1 18rem;
}

@media screen and (max-width: 1000px) {
    .cards {
        flex-wrap: wrap;
    }

    .cards > * {
        flex: auto;
    }
}

header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-block: 2em;
}

header h1 {
    font-size: 1.25rem;
    /* letter-spacing: 1px; */
    /* font-weight: 500; */
}

.icon {
    height: 1.5rem;
}
</style>
