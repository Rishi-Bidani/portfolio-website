<template>
    <section class="tech-stacks container">
        <header>
            <h2>Tech Stacks I have used</h2>
        </header>
        <article class="flex icons-container">
            <Icon
                v-for="(techstack, index) in techStacks"
                :src="techstack.src"
                :alt="techstack.name"
                :key="`${techstack.name}-${index}`"
                :rotateOnClick="true"
            />
        </article>
        <header>
            <h2>Tech Stacks I am currently working on</h2>
        </header>
        <article class="flex icons-container">
            <Icon
                v-for="(techstack, index) in techStacksWorking"
                :src="techstack.src"
                :alt="techstack.name"
                :key="`${techstack.name}-${index + 1}`"
                :rotateOnClick="true"
            />
        </article>
    </section>
</template>

<script>
import Icon from "./Icon.vue";

// Images
import vueIcon from "@/assets/techstacks/icons8-vue-js.svg";
import cssIcon from "@/assets/techstacks/icons8-css3.svg";
import htmlIcon from "@/assets/techstacks/icons8-html-5.svg";
import jsIcon from "@/assets/techstacks/icons8-javascript.svg";
import pythonIcon from "@/assets/techstacks/icons8-python.svg";
import psqlIcon from "@/assets/techstacks/icons8-postgresql.svg";
import nodeJSIcon from "@/assets/techstacks/nodejs-icon.svg";
import sqliteIcon from "@/assets/techstacks/sqlite-icon.svg";

import rustIcon from "@/assets/techstacks/rust-lang-icon.svg";
import goIcon from "@/assets/techstacks/icons8-golang.svg";

export default {
    name: "TechStacks",
    components: {
        Icon,
    },
    data() {
        return {
            techStacks: [
                {
                    name: "JavaScript",
                    src: jsIcon,
                },
                {
                    name: "NodeJS",
                    src: nodeJSIcon,
                },
                {
                    name: "Python",
                    src: pythonIcon,
                },
                {
                    name: "CSS",
                    src: cssIcon,
                },
                {
                    name: "HTML",
                    src: htmlIcon,
                },
                {
                    name: "Vue",
                    src: vueIcon,
                },
                {
                    name: "PostgreSQL",
                    src: psqlIcon,
                },
                {
                    name: "SQLite",
                    src: sqliteIcon,
                },
            ],
            techStacksWorking: [
                {
                    name: "Rust",
                    src: rustIcon,
                },
                {
                    name: "Golang",
                    src: goIcon,
                },
            ],
        };
    },
};
</script>

<style scoped>
.tech-stacks {
    --left-margin: 0;
    --right-margin: 3.5rem;
    margin-block: var(--left-margin) var(--right-margin);
    width: 100%;
}

.icons-container {
    gap: 1rem;
    margin-inline: 0 auto;
    flex-wrap: wrap;
}

header {
    padding-block: 2em;
}

/* ICON styles */

.icon-container {
    cursor: default;
}

.icon-container:hover {
    /* background-color: var(--text-color-3); */
    box-shadow: var(--text-color-2) 0px 1px 4px, var(--text-color-2) 0px 0px 0px 3px;
}
</style>
