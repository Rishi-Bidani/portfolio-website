<template>
    <div class="hr">
        <div class="before"></div>
        <h3 class="text">{{ text }}</h3>
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
    font-weight: lighter;
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
