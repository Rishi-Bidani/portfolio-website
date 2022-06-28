<template>
    <article class="bio">
        <p class="bio-content">
            I love making ideas come to life with code. I'm a web developer with a passion for
            building beautiful, responsive websites.
        </p>
        <p class="bio-content">
            I have been improving my <span class="red italic">fullstack skills</span> since the
            lockdown in 2020.
        </p>
        <p class="bio-content">
            I'm currently studying <span class="red">software engineering</span> at Monash
            University.
        </p>
    </article>
</template>

<script>
export default {
    name: "BioContent",
};
</script>

<style scoped>
article.bio {
    --p-fs: 1.5rem;
}

p.bio-content {
    font-size: var(--p-fs);
    line-height: 2em;
}
@media screen and (max-width: 1300px) {
    p.bio-content {
        --p-fs: 1.25rem;
    }
}

@media screen and (max-width: 800px) {
    p.bio-content {
        --p-fs: 1rem;
    }
}
</style>
