<script lang="ts" setup>
    const images = [
        "/avatars/1.png",
        "/avatars/2.png",
        "/avatars/3.png",
        "/avatars/4.png",
        "/avatars/5.png",
        "/avatars/6.png",
        "/avatars/7.png",
        "/avatars/8.png",
        "/avatars/9.png",
    ];
    const emit = defineEmits(["close","selectedAvtar"]);
    const hidePhotoLibrary = (value:any) => {
        emit("close",value);
    };
    const setImage = (data:any) => {
        emit("selectedAvtar",data);
    }
</script>

<template>
    <div class="fixed top-0 left-0 max-h[100vh] max-w[100vw] h-full w-full justify-center flex items-center">   
        <div class="h-max w-max bg-gray-900 gap-6 rounded-lg p-4">
           <div class="cursor-pointer flex items-end justify-end" @click="hidePhotoLibrary(false)">
                <Icon name="material-symbols:close-rounded" size="25"/>
           </div>
           <div class="grid grid-cols-3 justify-center items-center gap-8">
            <div v-for="(image, index) in images" :key="index" @click="setImage(image); hidePhotoLibrary(false)" class="relative cursor-pointer">
                <NuxtImg :src="image" alt="avatar" sizes="85"/>
            </div>
           </div>
        </div>
    </div>
</template>
