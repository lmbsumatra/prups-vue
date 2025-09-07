<script setup lang="ts">
import type { Guide } from './schema/guide.schema';
import guidesData from "../public/assets/guides.json"
import { ref } from 'vue';

const guides = ref<Guide[]>(guidesData)

const copyToClipboard = async (text: string | string[]) => {
  try {
    const content = Array.isArray(text) ? text.join("\n") : text;
    await navigator.clipboard.writeText(content);
    alert("Copied!");
  } catch (err) {
    alert(`Failed to copy text: ${err}`);
  }
};
</script>

<template>
  <div class="bg-slate-50 p-5 flex flex-col gap-8 min-h-screen">
    <!-- Header -->
    <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
      <h1 class="text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-3">
        Project Setup Guide
      </h1>
      <span class="text-gray-700">Step-by-step instructions for setting up your development projects</span>
    </div>

    <!-- Guides -->
    <div v-for="guide in guides" :key="guide.id" class="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300">
      <!-- Guide Title -->
      <h1 class="text-3xl font-bold text-indigo-900">{{ guide.name }}</h1>

      <!-- Tech Stack -->
      <div class="p-4 bg-gray-50 rounded-r-md border-l-4 border-indigo-500 flex flex-col gap-2">
        <h3 class="text-xl font-bold text-indigo-900">Tech Stack</h3>
        <div class="flex gap-4 flex-wrap">
          <div v-for="(tech, i) in guide.techStack" :key="i">
            <p :class="`px-4 py-1 rounded-full font-medium ${
              tech.includes('Vue') ? 'bg-green-100 text-green-800' :
              tech.includes('TypeScript') ? 'bg-blue-100 text-blue-800' :
              tech.includes('Tailwind') ? 'bg-pink-100 text-pink-800' :
              'bg-gray-100 text-gray-800'
            }`">
              {{ tech }}
            </p>
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div v-for="(step, index) in guide.steps" :key="step.id || index" class="flex flex-row gap-4">
        <!-- Step number -->
        <div v-if="!step.isOptional"
          class="h-10 w-10 leading-0 text-white font-bold flex justify-center items-center rounded-full bg-indigo-900">
          {{ guide.steps.filter(s => !s.isOptional).indexOf(step) + 1 }}
        </div>

        <!-- Step content -->
        <div :class="[
          'p-4 w-full rounded-md flex flex-col gap-2',
          step.isOptional ? 'bg-gray-50 border-l-4 border-gray-300' : 'bg-blue-50 border-l-4 border-blue-500'
        ]">
          <h3 class="font-medium text-indigo-900">
            <span v-if="step.isOptional">Additional notes: </span>{{ step.label }}
          </h3>

          <!-- Command block -->
          <div v-if="step.command?.length" class="bg-gray-900 text-gray-50 p-2 w-full rounded-md relative hover:bg-gray-800 transition-colors duration-200 text-sm">
            <p v-for="(cmd, i) in step.command" :key="i">
              {{ cmd }}
            </p>
            <button @click="copyToClipboard(step.command as string[])"
              class="ml-2 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 text-sm absolute top-1 right-1">
              Copy
            </button>
          </div>

          <!-- Additional notes -->
          <div v-if="step.additional?.length" class="p-4 bg-teal-50 rounded-r-md border-l-4 border-teal-500 flex flex-col gap-2">
            <p v-for="(note, i) in step.additional" :key="i" class="text-teal-900 text-sm">
              {{ note }}
            </p>
          </div>

          <!-- Code block -->
          <div v-if="step.codeBlock" class="bg-gray-900 text-gray-50 p-2 rounded-md relative hover:bg-gray-800 transition-colors duration-200 text-sm">
            <pre class="block whitespace-pre-wrap">
              {{ step.codeBlock }}
            </pre>
            <button @click="copyToClipboard(step.codeBlock as string)"
              class="ml-2 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 text-sm absolute top-1 right-1">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Optional: smooth font rendering for headers */
h1, h3 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
