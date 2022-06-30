<template>
    <nav>
        <a href="#introduction">
            <div class="rocket-stack">
                <img
                    src="@/assets/images/rocket-flame.svg"
                    alt="To top"
                    class="icon nav-icon rocket--flame"
                    draggable="false"
                />
                <img
                    src="@/assets/images/rocket-no-flame.svg"
                    alt="To top"
                    class="icon nav-icon rocket"
                    draggable="false"
                />
            </div>
        </a>
    </nav>
</template>

<script>
let lastScrollTop = 0;
window.addEventListener(
    "scroll",
    function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // remove fixed to icon
            document.querySelector(".rocket-stack").classList.remove("fixed");
        } else {
            // upscroll code
            document.querySelector(".rocket-stack").classList.add("fixed");
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
);

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

.fixed {
    /* position in top left */
    position: fixed !important; /* I know this is bad, but this is the fastest way to do it */
    top: 0;
    left: 0;
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
    /* transform: rotate(90deg); */
}
</style>
