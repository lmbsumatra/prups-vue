<script setup lang="ts">
import type { Guide } from './schema/guide.schema';
import guidesData from "../public/assets/guides.json"
import { ref } from 'vue';

const guides = ref<Guide[]>(guidesData)
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

    <div v-for="guide in guides" :key="guide.id" class="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4">
      <!-- header -->
      <h1 class="text-3xl font-bold text-blue-900">{{ guide.name }}</h1>

      <!-- tech stack -->
      <div class="p-4 bg-neutral-50 rounded-r-md border-l-4 border-blue-700 flex flex-col gap-2">
        <h3 class="text-xl text-blue-900 font-bold">Tech Stack</h3>
        <div class="flex gap-4 flex-wrap">
          <div v-for="(tech, i) in guide.techStack" :key="i">
            <p class="bg-blue-100 text-blue-900 font-medium px-4 py-1 rounded-full">
              {{ tech }}
            </p>
          </div>
        </div>
      </div>

      <!-- steps -->
      <div v-for="(step, index) in guide.steps" :key="step.id || index" class="flex flex-row gap-4">
        <div
          class="h-10 w-10 leading-0 text-neutral-50 font-bold flex justify-center items-center rounded-full bg-blue-900">
          {{ index + 1 }}
        </div>
        <div class="bg-neutral-50 p-4 w-full rounded-md flex flex-col gap-2">
          <h3 class="text-blue-900 font-medium">{{ step.label }}</h3>

          <!-- command -->
          <div v-if="step.command?.length" class="bg-slate-900/90 p-2 w-full rounded-md">
            <p v-for="(cmd, i) in step.command" :key="i" class="text-neutral-50">
              {{ cmd }}
            </p>
          </div>

          <!-- additional notes -->
          <div v-if="step.additional?.length" class="bg-neutral-200/50 p-2 w-full rounded-md">
            <p v-for="(note, i) in step.additional" :key="i" class="text-blue-900 text-sm">
              {{ note }}
            </p>
          </div>

          <!-- code block -->
          <pre v-if="step.codeBlock" class="bg-slate-900/90 p-2 rounded-md text-neutral-50">
{{ step.codeBlock }}
        </pre>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
