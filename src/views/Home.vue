<script setup lang="ts">
import type { Guide } from '../schema/guide.schema';
import guidesData from "../../public/assets/guides.json"
import { ref } from 'vue';
import Button from '../components/ui/button/Button.vue';

const guides = ref<Guide[]>(guidesData)

</script>

<template>
    <div class="bg-slate-50 p-5 flex flex-col gap-8 min-h-screen">
        <!-- header -->
        <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <h1
                class="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text py-3">
                Project Setup Guide
            </h1>
            <span class="text-gray-700">Step-by-step instructions for setting up your development projects</span>
        </div>

        <!-- guides -->
        <div v-for="guide in guides" :key="guide.id"
            class="bg-white p-8 rounded-b-2xl shadow-lg flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-700">
            <!-- guide title -->
            <h1 class="text-3xl font-bold text-blue-900">{{ guide.name }}</h1>

            <!-- tech stack -->
            <div class="flex gap-4 flex-wrap">
                <div v-for="(tech, i) in guide.techStack" :key="i">
                    <p :class="`px-4 py-1 rounded-full font-medium bg-gray-100 text-gray-800`">
                        {{ tech }}
                    </p>
                </div>
            </div>
            <router-link :to="{ name: 'Guide', params: { id: guide.id } }"> <Button
                    class="bg-blue-500 hover:bg-blue-700 text-white w-fit">View details →</Button></router-link>
        </div>
    </div>
</template>

<style scoped>
h1,
h3 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
