<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar />
    <main class="flex flex--column">
        <Introduction :title="introduction.title" />
        <section class="columns container inline-center">
            <div class="left-column">
                <TechStacks class="techstack-container container" />
                <Projects class="project-container" />
            </div>
            <Interests />
        </section>
    </main>
</template>

<script>
import Introduction from "@/components/introduction/Introduction.vue";
import Navbar from "@/components/Navbar.vue";
import TechStacks from "@/components/TechStacks.vue";
import Projects from "@/components/projects/Projects.vue";
import Interests from "@/components/aside/Interests.vue";

export default {
    name: "App",
    components: {
        Introduction,
        Navbar,
        TechStacks,
        Projects,
        Interests,
    },
    data() {
        return {
            introduction: {
                title: "Hi, I'm Rishi",
                bio: "I am a web developer.",
            },
        };
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

:root {
    --bg-values: 14, 16, 22;
    --bg-color: rgba(14, 16, 22); /** Leave in rgba for image hovering effect to work */
    --primary: #1d2639;

    --selection-color: hsl(220, 19%, 15%);

    --text-color: hsl(227, 7%, 75%);
    --text-color-2: hsl(333deg, 100%, 45%);
    --text-color-3: hsl(194, 51%, 59%);

    /* Sizes */
    --nav-height: 4rem;
}

html {
    scroll-behavior: smooth;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}

::selection {
    background-color: var(--selection-color);
}

body {
    background-color: var(--bg-color);
}

nav {
    height: var(--nav-height);
}

main {
    width: 100%;
    /* padding: 5rem 10rem; */
}

section.container {
    --section-width: 80%;
    width: var(--section-width);
}
@media screen and (max-width: 1100px) {
    section.container {
        --section-width: 90%;
    }
}

@media screen and (max-width: 400px) {
    section.container {
        --section-width: 90%;
    }
}

.columns {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 1rem;
}

.columns h2 {
    font-size: clamp(1rem + 1vw, 2vw, 2rem);
}

@media screen and (max-width: 1000px) {
    .columns {
        grid-template-columns: 1fr;
    }
}

/* Utility css */

.grid {
    display: grid;
}

.grid-center {
    place-items: center;
}

.flex {
    display: flex;
}

.flex--column {
    flex-direction: column;
}

.red {
    color: var(--text-color-2);
}

.italic {
    font-style: italic;
}

.inline-center {
    margin-inline: auto;
}
</style>
