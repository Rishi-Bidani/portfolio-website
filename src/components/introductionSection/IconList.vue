<template>
    <div class="icon-list">
        <Icon
            v-for="(icon, index) in icons"
            :src="icon.src"
            :key="`-${index}`"
            :alt="icon.alt"
            :link="icon.link"
        />
    </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
    name: "IconList",
    components: {
        Icon,
    },
    props: {
        icons: Array,
    },
};
</script>

<style scoped>
.icon-list {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
}
</style>
