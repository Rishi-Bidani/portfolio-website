<template>
    <div class="avatar">
        <img :src="src" alt="avatar" />
        <div class="hover-content">
            {{ hoverContent }} <span class="attribution">{{ attribution }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        src: String,
        hoverContent: String,
        attribution: String,
    },
};
</script>

<style scoped>
.avatar {
    --avatar-height: 20rem;
}

:where(.avatar, *) {
    height: var(--avatar-height);
    aspect-ratio: 1;
}

.avatar {
    background-color: var(--primary);
    border-radius: 1rem;
    transition: transform 500ms ease-in-out;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.avatar:hover {
    transform: scale(1.02);
}

.hover-content {
    display: none;
}

.avatar:hover .hover-content {
    display: block;
    text-align: center;
}

.attribution {
    color: var(--text-color-2);
}

@media screen and (max-width: 500px) {
    .avatar {
        --avatar-height: 15rem;
    }
}
</style>
