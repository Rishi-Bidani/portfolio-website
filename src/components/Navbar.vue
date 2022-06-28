<template>
    <nav>
        <div href="introduction" class="rocket-stack">
            <img
                src="@/assets/images/rocket-flame.svg"
                alt=""
                class="icon nav-icon rocket--flame"
                draggable="false"
            />
            <img
                src="@/assets/images/rocket-no-flame.svg"
                alt=""
                class="icon nav-icon rocket"
                draggable="false"
            />
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
.icon {
    height: 100%;
    cursor: pointer;
    transition: transform 300ms ease-in-out;
    /* background-color: black; */
}

.icon:hover {
    transform: scale(1.1);
}

.nav-icon {
    max-height: var(--nav-height);
    margin: 1rem;
}

.rocket-stack {
    position: relative;
    width: fit-content;
    height: var(--nav-height);
    /* background-color: aqua; */
}
.rocket {
    position: relative;
}
.rocket--flame {
    position: absolute;
    display: none;
}

.rocket-stack:hover .rocket--flame {
    display: block;
}

.rocket-stack:active {
    display: block;
    transform: rotate(90deg);
}
</style>
