<template>
    <!-- If rotateOnClick is true -->

    <a :href="link" class="icon-container" :class="rotateOnClick ? 'rotate' : ''" :title="alt">
        <img :src="src" :alt="alt" draggable="false" />
    </a>
</template>

<script>
export default {
    name: "Icon",
    props: {
        src: String,
        alt: String,
        link: String,
        // rotateOnClick: Boolean,
        rotateOnClick: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.icon-container {
    padding: 0.5rem;
    display: flex;
    width: fit-content;
    border-radius: 0.5rem;
    background-color: var(--primary);
    cursor: pointer;
}

.icon-container:hover {
    /* background-color: var(--text-color-3); */
    box-shadow: var(--text-color-3) 0px 1px 4px, var(--text-color-3) 0px 0px 0px 3px;
}

img {
    height: 3rem;
    aspect-ratio: 1;
}

.rotate:active {
    --animation-delay: 0.5s;
    --animation-duration: 1s;
    transform: scale(1.1);
    animation: rotate var(--animation-duration) var(--animation-delay) forwards;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
