<template>
  <div class="w-full">
    <h3 class="text-xl text-secondary mb-4">Projects</h3>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <UtilsProjectCard
        v-for="(project, index) in myProjects"
        :image="project.image"
        :key="index"
      >
        <template v-slot:title>
          {{ project.title }}
        </template>
        <template v-slot:stack>
          <UtilsStackBadge
            v-for="(stack, index) in project.stack"
            :stack="stack"
            :key="index"
          >
            {{ stack }}
          </UtilsStackBadge>
        </template>
        <template v-slot:description>
          {{ project.description }}
        </template>
      </UtilsProjectCard>
    </div>
  </div>
</template>

<script setup>
const myProjects = [
  {
    title: "Private language tutors (Hitalki.com)",
    stack: ["Javascript", "Vue.js", "Nuxt.js", "Tailwind CSS", "Node.js"],
    image: "/hitalki/desktop/index.png",
    description:
      "I was in charge of front end side of Hitalki platform, which developed with nuxt (Full ssr in main web with jwt/csrf authentication) and nuxt in spa mode for admin panel. I also use vue extend routing to create fully dynamic routes (Different route structure, exact same main component) I was in charge of some technical/seo related stuff like seo friendly structure, create sitemap and update them dynamically using an api, schema, etc. I also developed a micro service using node js (express framework) that get images using an api, compress them and send them through the main backend api and store it.",
  },
];
</script>
