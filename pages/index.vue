<template>
  <div>
    <div
      class="h-screen bg-gray-100 flex flex-col justify-center p-4 md:p-4 lg:p-32 xl:p-32 leading-tight"
    >
      <h1
        class="text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold underline mb-4"
      >
        Hi. <br />
        My name is Grzegorz.
        <br />I code.
      </h1>
      <p
        class="text-md md:text-2xl lg:text-2xl xl:text-2xl text-gray-700 font-light"
      >
        I have been doing it since I turned eight.
        <br />
        Below you can find my summary.
      </p>
    </div>
    <div class="p-4 md:p-4 lg:p-32 xl:p-32 flex flex-col">
      <h2
        class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-black font-bold underline mb-6"
      >
        My skills
      </h2>
      <div class="flex row flex-wrap justify-between">
        <div class="flex-col w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
          <p
            class="text-md md:text-2xl lg:text-2xl xl:text-2xl text-gray-700 font-light mb-2 md:mb-4 lg:mb-4 xl:mb-4"
          >
            Languages
          </p>
          <div
            v-for="language in languages"
            :key="language"
            class="rounded bg-gray-800 px-3 py-1 mb-2"
          >
            <p class="font-semibold text-center text-white text-base">
              {{ language }}
            </p>
          </div>
        </div>
        <div class="flex-col w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
          <p
            class="text-md md:text-2xl lg:text-2xl xl:text-2xl text-gray-700 font-light mb-2 md:mb-4 lg:mb-4 xl:mb-4"
          >
            Frameworks
          </p>
          <div
            v-for="framework in frameworks"
            :key="framework"
            class="rounded bg-gray-800 px-3 py-1 mb-2"
          >
            <p class="font-semibold text-center text-white text-base">
              {{ framework }}
            </p>
          </div>
        </div>
        <div class="flex-col w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
          <p
            class="text-md md:text-2xl lg:text-2xl xl:text-2xl text-gray-700 font-light mb-2 md:mb-4 lg:mb-4 xl:mb-4"
          >
            Others
          </p>
          <div
            v-for="other in others"
            :key="other"
            class="rounded bg-gray-800 px-3 py-1 mb-2"
          >
            <p class="font-semibold text-center text-white text-base">
              {{ other }}
            </p>
          </div>
        </div>
        <div class="flex-col w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
          <p
            class="text-md md:text-2xl lg:text-2xl xl:text-2xl text-gray-700 font-light mb-2 md:mb-4 lg:mb-4 xl:mb-4"
          >
            Worked with
          </p>
          <div
            v-for="tried in trieds"
            :key="tried"
            class="rounded bg-gray-800 px-3 py-1 mb-2"
          >
            <p class="font-semibold text-center text-white text-base">
              {{ tried }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 p-4 md:p-4 lg:p-32 xl:p-32 flex flex-col">
      <h2
        class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-black font-bold underline mb-6"
      >
        My projects
      </h2>
      <div class="flex flex-wrap row justify-between">
        <div
          v-for="project in projects"
          :key="project.repoLink"
          class="w-full md:w-23/48 lg:w-23/48 xl:w-23/48 mb-8"
        >
          <project-card
            :repo-link="project.repoLink"
            :title="project.title"
            :name="project.name"
            :link="project.link"
            :description="project.description"
            :technologies="project.technologies"
            :icon-title="project.iconTitle"
          />
        </div>
      </div>
    </div>
    <div
      class="flex row items-center justify-between px-4 md:px-32 lg:px-32 xl:px-32 py-4"
    >
      <p
        class="text-sm md:text-xl lg:text-xl xl:text-xl text-gray-700 font-semibold"
      >
        2020
      </p>
      <p
        class="text-sm md:text-xl lg:text-xl xl:text-xl text-gray-700 font-semibold"
      >
        Made by Grzegorz Perun
      </p>
      <div>
        <a
          href="https://facebook.com/grzegorz.perun"
          rel="noopener noreferer"
          target="_blank"
          class="mr-2"
        >
          <font-awesome-icon
            class="text-xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-700"
            :icon="['fab', 'facebook']"
        /></a>
        <a
          href="https://github.com/Mensix"
          rel="noopener noreferer"
          target="_blank"
          ><font-awesome-icon
            class="text-xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-700"
            :icon="['fab', 'github']"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ['C#', 'JavaScript', 'HTML', 'CSS'].sort(),
      frameworks: ['Vue', 'React', 'Nuxt.js'].sort(),
      others: ['styled-components', 'Git'].sort(),
      trieds: [
        'AutoHotkey',
        'Java',
        'Python',
        'Lua',
        'Webpack',
        'Node',
        'TypeScript',
        'Sass',
        'Bootstrap',
        'Tailwind',
      ].sort(),
      projects: [
        {
          repoLink: 'https://github.com/Mensix/spis-sekcji/',
          title: 'JBwA',
          name: 'spis-sekcji',
          link: 'https://sekcje.github.io/',
          description:
            'An almost complete list of polish groups related to the most popular polish internet subculture. It uses direct Facebook groups data, which are scraped using SpisSekcjiManager.',
          technologies: ['Nuxt', 'Vue', 'Vuex', 'Quasar', 'Firebase'].sort(),
          iconTitle: false,
        },
        {
          repoLink: 'https://github.com/Mensix/BombasTranslator/',
          title: 'arrows-alt-h',
          name: 'BombasTranslator',
          link: 'https://bombastranslator.netlify.app/',
          description:
            'Polish-bombas translator. It is a language used by one of the most famous polish youtubers Major Suchodolski who is known from using his custom dialect.',
          technologies: ['React', 'styled-components'].sort(),
          iconTitle: true,
        },
        {
          repoLink: 'https://github.com/Mensix/SpisSekcjiManager',
          title: 'download',
          name: 'SpisSekcjiManager',
          description:
            'CLI used to manage SpisSekcji. It is a Facebook group data scraper.',
          technologies: ['C#', 'FirebaseDatabase.NET'].sort(),
          iconTitle: true,
        },
        {
          repoLink: 'https://github.com/Mensix/TodoTruck',
          title: 'plus',
          name: 'TodoTruck',
          description: 'Simple TODO app for learning purposes.',
          technologies: ['Vue'].sort(),
          iconTitle: true,
        },
        {
          repoLink: 'https://github.com/Mensix/OpenJBWA',
          title: 'JBwA',
          name: 'OpenJBWA',
          description:
            'Website with two Facebook usable scripts for learning purposes.',
          technologies: ['React', 'styled-components', 'Prism'].sort(),
          iconTitle: false,
        },
        {
          repoLink: 'https://github.com/Mensix/my-site',
          title: 'code',
          name: 'my-site',
          description: 'My personal website, which you are on :)',
          technologies: ['Nuxt', 'Vue', 'Tailwind'].sort(),
          iconTitle: true,
        },
      ],
    }
  },
}
</script>
