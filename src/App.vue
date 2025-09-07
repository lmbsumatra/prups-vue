<script setup lang="ts">
const techStack = ["ReactJS", "TailwindCSS", "Redux Toolkit", "Zod", "Axios", "React Router", "Vite", "TypeScript"]
</script>

<template>
  <div class="bg-violet-50 p-5 flex flex-col gap-8">
    <div class="bg-white p-8 rounded-2xl shadow-xl text-center">
      <h1 class="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3">
        Project Setup Guide
      </h1>
      <span class="text-neutral-700">Step-by-step instructions for setting up your development
        projects</span>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-2">
      <!-- header -->
      <h1 class="text-3xl font-bold text-blue-900">Frontend React Projects</h1>
      <!-- tech stack -->
      <div class="p-4 bg-neutral-50/50 rounded-r-md border-l-4 border-blue-700 flex flex-col gap-2">
        <h3 class="text-xl text-blue-900 font-bold">Tech Stack</h3>
        <!-- tech stack list -->
        <div class="flex gap-4 flex-wrap">
          <div v-for="(tech, i) in techStack" :key="i">
            <p class="bg-blue-100 text-blue-900 font-medium px-4 py-1 rounded-full">
              {{ tech }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div
          class="h-10 w-10 leading-0 text-neutral-50 font-bold flex justify-center items-center rounded-full bg-blue-900">
          1</div>
        <div class="bg-neutral-50/50 p-2 w-full rounded-md flex flex-col gap-2">
          <h3 class="text-blue-900 font-medium">Create Vite Project</h3>
          <div class="bg-slate-900/90 p-2 w-full rounded-md">
            <p class="text-neutral-50">npm create vite@latest my-app</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
