<template>
    <article class="favourite-project-card grid">
        <div class="lds-dual-ring"></div>
        Loading...
    </article>
</template>

<script>
export default {
    name: "PushEventCard",
    components: {},
    props: {
        repositry: String,
        stars: Number,
        license: String,
        pushTime: String,
        languages: Array,
    },
};
</script>

<style scoped>
.favourite-project-card {
    background-color: var(--primary);
    min-height: 5rem;
    height: fit-content;
    margin-block: 1rem;
    padding: 0.5em;
    border-radius: 0.5rem;
    grid-template-columns: 3rem 1fr;
    place-items: center;
}

/* Loader */
.lds-dual-ring {
    margin: 1em;
    width: 2rem;
    height: 2rem;
    margin-block: auto;
}
.lds-dual-ring:after {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 6px solid var(--text-color);
    border-color: var(--text-color) transparent var(--text-color) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
