<template>
    <a :href="link" class="btn">
        <span class="btn-text">{{ text }}</span>
    </a>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        link: String,
    },
};
</script>

<style>
.btn {
    --btn-fs: 1rem;

    background-color: var(--text-color-3);
    color: var(--bg-color);
    margin-block: 1rem 0;
    padding: 0.5em;
    border-radius: 2rem;
    text-decoration: none;
    font-size: var(--btn-fs);
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    max-width: 8rem;
    display: flex;
    place-items: center;
}

.btn:hover {
    /* box-shadow: var(--text-color-3) 2px 2px 5px; */
    transform: scale(1.05);
}

.btn-text {
    margin: auto;
}
</style>
