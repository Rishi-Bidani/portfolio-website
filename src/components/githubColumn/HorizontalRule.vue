<template>
    <div class="hr">
        <div class="before"></div>
        <p class="text">{{ text }}</p>
        <div class="after"></div>
    </div>
</template>

<script>
export default {
    name: "HorizontalRule",
    components: {},
    props: {
        text: String,
    },
};
</script>

<style>
.hr {
    display: flex;
    place-items: center;
    gap: 1ch;
    padding-block: 1em;
}

.text {
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.8rem;
}

.before {
    min-width: 25px;
    height: 1px;
    background-color: #181b2b;
}

.after {
    width: 100%;
    height: 1px;
    background-color: #181b2b;
}
</style>
