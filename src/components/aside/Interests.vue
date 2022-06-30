<template>
    <aside>
        <header>
            <h2>Some of my interests</h2>
        </header>
        <section class="interests">
            <article class="photography flex flex--column">
                <HorizontalRule :text="'Photography'" />
                <div class="images grid grid-center">
                    <Image
                        v-for="(image, index) in photography.sunsets"
                        :src="image.src"
                        :alt="image.alt"
                        :key="`${image.alt}-${index}`"
                        :link="image.link"
                    />
                </div>
            </article>
            <article class="youtube-channels"></article>
        </section>
    </aside>
</template>

<script>
// Components
import HorizontalRule from "../projects/HorizontalRule.vue";
import Image from "./Image.vue";

// Sunset images
import sunset1 from "@/assets/photography/sunsets/small-size/sunset-1.jpg";
import sunset2 from "@/assets/photography/sunsets/small-size/sunset-2.jpeg";
import sunset3 from "@/assets/photography/sunsets/small-size/sunset-3.jpeg";
import sunset4 from "@/assets/photography/sunsets/small-size/sunset-4.jpeg";

import sunset1FullSize from "@/assets/photography/sunsets/sunset-1.jpg";
import sunset2FullSize from "@/assets/photography/sunsets/sunset-2.jpg";
import sunset3FullSize from "@/assets/photography/sunsets/sunset-3.jpg";
import sunset4FullSize from "@/assets/photography/sunsets/sunset-4.jpg";

export default {
    name: "Interests",
    components: {
        HorizontalRule,
        Image,
    },
    data() {
        return {
            photography: {
                sunsets: [
                    {
                        src: sunset1,
                        alt: "Sunset",
                        link: sunset1FullSize,
                    },
                    {
                        src: sunset2,
                        alt: "Sunset",
                        link: sunset2FullSize,
                    },
                    {
                        src: sunset3,
                        alt: "Sunset",
                        link: sunset3FullSize,
                    },
                    {
                        src: sunset4,
                        alt: "Sunset",
                        link: sunset4FullSize,
                    },
                ],
            },
        };
    },
};
</script>

<style>
aside {
    width: 100%;
}

.photography {
    gap: 1rem;
    height: 100%;
}

.images {
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

@media screen and (max-width: 500px) {
    .images {
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
}
</style>
