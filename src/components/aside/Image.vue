<template>
    <a :href="link" class="image">
        <div class="overlay"></div>
        <span class="overlay-text">Click to full size</span>
        <img :src="src" :alt="alt" class="small-size-img" />
    </a>
</template>

<script>
export default {
    name: "Image",
    props: {
        src: String,
        alt: String,
        link: String,
    },
};
</script>

<style>
.image {
    cursor: pointer;
    position: relative;
    isolation: isolate;
    display: grid;
    place-items: center;
}

/* @media screen and (max-width: 400px) {
    .image {
        max-width: 90%;
    }
} */

.small-size-img {
    width: 100%;
}

.image:hover {
    outline: 2px solid var(--text-color-3);
}

.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
}

.overlay:hover {
    position: absolute;
    background: var(--bg-color);
    height: 100%;
    width: 100%;
    opacity: 0.7;
}

.overlay:hover ~ .overlay-text {
    z-index: 2;
}

.overlay-text {
    position: absolute;
    z-index: -1;
    color: var(--text-color-3);
}
</style>
