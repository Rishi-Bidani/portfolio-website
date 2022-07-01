<template>
    <a :href="link" class="image grid overlay-container">
        <!-- <span class="overlay-text">Click to full size</span> -->
        <img :src="src" :alt="alt" class="small-size-img" />
        <div class="overlay">Click to full size</div>
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
a.image {
    text-decoration: none;
}

.overlay-container {
    grid-template-columns: 1fr;
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
    height: 100%;
    width: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
    display: none;
}

.overlay-container:hover .overlay {
    --overlay-color: var(--bg-values);
    --overlay-opacity: 0.7;
    --overlay-text-color: var(--text-color-3);

    width: 100%;
    height: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
    color: white;
    display: grid;
    place-items: center;

    background-color: rgba(var(--overlay-color), var(--overlay-opacity));
    color: var(--overlay-text-color);
}

.overlay-container img {
    width: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
}
</style>
