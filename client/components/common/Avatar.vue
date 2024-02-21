<template>
    <div class="flex items-center justify-center">
        <div v-if="type === 'sm'" class="relative h-10 w-10">
            <NuxtImg :src="imgSrc" alt="avatar" class="rounded-full"/>
        </div>
        <div v-if="type === 'lg'" class="relative h-14 w-14">
            <NuxtImg :src="imgSrc" alt="avatar" class="rounded-full"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    type: String,
    imgSrc: String
});
</script>