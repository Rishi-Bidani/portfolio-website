<template>
    <section id="introduction" class="grid introduction container">
        <article class="bio">
            <h1 class="flex">
                {{ title }}
                <span class="blob-wave"
                    ><img src="@/assets/images/blob-wave-webp.webp" alt=""
                /></span>
            </h1>
            <BioContent />
            <IconList :icons="iconList" />
        </article>
        <div class="avatar-container">
            <Avatar
                :src="avatarImage"
                :hoverContent="avatarAttributionContent"
                :attribution="avatarAttributionAuthor"
            />
        </div>
    </section>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

import IconList from "@/components/introduction/IconList.vue";
import BioContent from "@/components/introduction/BioContent.vue";

// Images
import avatarImage from "@/assets/images/kisuke.svg";
import githubIcon from "@/assets/images/icons8-github.svg";
import codepenIcon from "@/assets/images/icons8-codepen.svg";

export default {
    name: "Introduction",
    components: {
        Avatar,
        IconList,
        BioContent,
    },
    props: {
        msg: String,
        title: String,
        bio: String,
    },
    data() {
        return {
            // Avatar
            avatarImage: avatarImage,
            avatarAttributionContent: "Traced by",
            avatarAttributionAuthor: "@me ;)",

            // Icon
            githubIcon: githubIcon,
            iconList: [
                {
                    src: githubIcon,
                    alt: "Github",
                    link: "https://github.com/Rishi-Bidani",
                },
                {
                    src: codepenIcon,
                    alt: "Codepen",
                    link: "https://codepen.io/Ribid",
                },
            ],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#introduction {
    --h1-fs: 4rem;
    /* margins */
    /* --section-margin-left-right: 10rem; */
    --section-margin-top: 7rem;
    --section-margin-bottom: 3.5rem;
    --section-margin-top-bottom: var(--section-margin-top) var(--section-margin-bottom);
}

section.introduction {
    grid-template-columns: 1.5fr 1fr;
    margin: var(--section-margin-top-bottom) var(--section-margin-left-right);
    margin-inline: auto;
    margin-block: var(--section-margin-top-bottom);
}

h1 {
    font-size: var(--h1-fs);
    font-weight: 900;
    margin-bottom: 1rem;
    color: white;
}
.avatar-container {
    display: flex;
    justify-content: flex-end;
}

.blob-wave img {
    height: var(--h1-fs);
    margin-inline: 1rem;
}

.bio {
    width: 100%;
}

@media screen and (max-width: 1300px) {
    #introduction {
        --section-margin-left-right: 5rem;
    }
}

@media screen and (max-width: 1250px) {
    #introduction {
        --h1-fs: 3rem;
    }
}

@media screen and (max-width: 1000px) {
    #introduction {
        --h1-fs: 2rem;
        --section-margin-top-bottom: 2rem;
        --section-width: 90%;
    }

    section.introduction {
        /* --section-margin-left-right: 1rem; */
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .avatar-container {
        justify-content: left;
    }
}

@media screen and (max-width: 700px) {
    #introduction {
        --h1-fs: 1.5rem;
        /* --section-margin-left-right: 1rem; */
    }
}
</style>
