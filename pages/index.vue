<script setup lang="ts">
import { Bars3BottomLeftIcon, BookOpenIcon, ChevronDownIcon, CircleStackIcon, CubeIcon, LanguageIcon, MagnifyingGlassIcon, SpeakerWaveIcon, UserIcon } from '@heroicons/vue/24/solid'

definePageMeta({
  layout: 'main',
})

const skills = [
  ['HTML', 'JavaScript', 'CSS', 'C#'],
  ['Vue', 'React'],
  ['Git', 'Nuxt.js', 'Tailwind'],
]

const projects = [
  {
    icon: MagnifyingGlassIcon,
    link: 'https://dsj24.pl/',
    title: 'DSJ24.PL',
    subtitle: 'Deluxe Ski Jump 4 venues database. The idea behind it became viral due to the game popularity in Poland. It has been mentioned in many polish medias',
    technologies: ['Vue.js', 'Nuxt.js', 'BootstrapVue'],
  },
  {
    icon: Bars3BottomLeftIcon,
    link: 'https://sekcje.github.io/',
    githubLink: 'https://github.com/Mensix/spis-sekcji-next/',
    title: 'Spis Sekcji',
    subtitle: 'The database containing almost complete list of Facebook groups belonging to one of the most popular polish internet community.',
    technologies: ['Vue.js', 'Nuxt.js', 'Quasar', 'Firebase'],
  },
  {
    icon: CircleStackIcon,
    githubLink: 'https://github.com/Mensix/OpenFIS/',
    title: 'OpenFIS',
    subtitle: 'API wrapper around FIS ski jumping results database.',
    technologies: ['ASP.NET', 'PostgreSQL', 'Playwright'],
  },
  {
    icon: CubeIcon,
    githubLink: 'https://github.com/Mensix/DDDSJ4/',
    title: 'DDDSJ4',
    subtitle:
      '.obj and .mtl files converter to DSJ4 .xml compatible format, which allows players to put desired 3D model into the game.',
    technologies: ['C#'],
  },
  {
    icon: LanguageIcon,
    link: 'https://bombastranslator.netlify.app/',
    githubLink: 'https://github.com/Mensix/bombastranslator/',
    title: 'BombasTranslator',
    subtitle: 'Polish-bombas translator, the language used by one of the most famous polish youtubers Major Suchodolski, who is known from using this polish dialect. Not serious project.',
    technologies: ['React', 'styled-components'],
  },
  {
    icon: BookOpenIcon,
    link: 'https://docs.dsj24.pl/',
    githubLink: 'https://github.com/Gorisek-Bros/docs/',
    title: 'DSJ4 Docs',
    subtitle:
      'Deluxe Ski Jump 4 XML reference, used to create custom hills in-game.',
    technologies: ['Vitepress', 'Markdown'],
  },
  {
    icon: UserIcon,
    githubLink: 'https://github.com/Mensix/my-site',
    title: 'my-site',
    subtitle: 'The site, which you are currently on :)',
    technologies: ['Vue', 'Nuxt.js', 'Tailwind'],
  },
]
</script>

<template>
  <section class="flex min-h-[calc(100vh-94px)] flex-col justify-center px-6 md:px-0 md:text-center">
    <div class="m-auto">
      <div class="mb-1 items-center gap-8 md:grid md:grid-cols-[1fr,auto,1fr] md:before:h-1 md:before:border-b md:after:h-1 md:after:border-b">
        <chip solid rounded wide>
          <SpeakerWaveIcon class="w-5 h-5" />
          Hello, my name is...
        </chip>
      </div>
      <h1 class="mb-4 text-6xl font-bold">
        Grzegorz Perun
      </h1>
      <p class="text-lg tracking-wide text-gray-600">
        I'm <b>frontend developer</b> from <b>Poland.</b>
      </p>
    </div>
  </section>
  <div class="flex items-center justify-center py-2">
    <ChevronDownIcon class="h-6 w-6 animate-bounce duration-700" />
  </div>
  <div class="space-y-16 px-6 py-16 md:mx-auto md:w-2/3 md:px-0">
    <section class="flex flex-col justify-center">
      <heading>About me</heading>
      <p class="mb-4 text-lg tracking-wide text-gray-600">
        Once I turned eight, I embarked on
        <b>programming with first steps in Batch.</b> Over the course of
        years, I’ve been trying my hand at multiple technologies, eventually
        finding myself comfortable in <b>front-end development</b> and
        <b>making communities oriented things.</b>
      </p>
      <p class="text-lg tracking-wide text-gray-600">
        Nowadays I’m 20 years old. As
        <b>an IT student at Warsaw University of Life Sciences</b>
        and <b>working front-end developer</b>, it’s my pleasure to meet you.
      </p>
    </section>
    <section class="flex flex-col justify-center">
      <heading>My skills</heading>
      <div class="grid grid-cols-3 gap-1 md:gap-16">
        <div v-for="skill in skills" :key="skill[0]">
          <div class="flex flex-col gap-y-1">
            <chip v-for="subskill in skill" :key="subskill" centered>
              {{ subskill }}
            </chip>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col justify-center">
      <heading>My projects</heading>
      <div class="grid w-full grid-cols-1 gap-y-4 md:auto-rows-fr md:grid-cols-2 md:gap-x-2">
        <project-card v-for="project in projects" :key="project.link" :link="project.link" :github-link="project.githubLink" :title="project.title" :technologies="project.technologies" :subtitle="project.subtitle">
          <template #icon>
            <component :is="project.icon" class="h-8 w-8 text-white" />
          </template>
        </project-card>
      </div>
    </section>
  </div>
</template>
