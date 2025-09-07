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
        <div v-if="!step.isOptional"
          class="h-10 w-10 leading-0 text-neutral-50 font-bold flex justify-center items-center rounded-full bg-blue-900">
          {{guide.steps.filter(s => !s.isOptional).indexOf(step) + 1}}
        </div>
        <div :class="[
          'p-4 w-full rounded-md flex flex-col gap-2',
          step.isOptional ? '' : ' border-1 border-neutral-200 bg-neutral-50'
        ]">

          <h3 class="text-blue-900 font-medium"><span v-if="step.isOptional">Additional notes: </span>{{ step.label }}
          </h3>

          <!-- command -->
          <div v-if="step.command?.length" class="bg-slate-900/90 p-2 w-full rounded-md text-sm relative">
            <p v-for="(cmd, i) in step.command" :key="i" class="text-neutral-50">
              {{ cmd }}
            </p>
            <button @click="copyToClipboard(step.command as string[])"
              class="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm absolute top-1 right-1">
              Copy
            </button>
          </div>

          <!-- additional notes -->
          <div v-if="step.additional?.length"
            class="p-4 bg-yellow-100 rounded-r-md border-l-4 border-yellow-700 flex flex-col gap-2">
            <p v-for="(note, i) in step.additional" :key="i" class="text-neutral-900 text-sm">
              {{ note }}
            </p>
          </div>

          <!-- code block -->
          <div v-if="step.codeBlock" class="bg-slate-900/90 p-2 rounded-md text-neutral-50 text-sm relative">
            <pre class="block">
            {{ step.codeBlock }}
            </pre>
            <button @click="copyToClipboard(step.codeBlock as string)"
              class="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm absolute top-1 right-1">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
