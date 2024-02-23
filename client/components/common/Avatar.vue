<script setup>
import ContextMenu from './contextMenu.vue';

    const isHover = ref(false);
    const isContextMenuVisible = ref(false);
    const contextMenuCordinates = ref({
        x:0,
        y:0
    });
    const props = defineProps({
        type: String,
        imgSrc: String
    });
    const setHover = (isHoverVal) => {
        isHover.value = isHoverVal;
    };
    const showContextMenu = (e) =>{
        e.preventDefault();
        contextMenuCordinates.value.x=e.clientX;
        contextMenuCordinates.value.y=e.clientY;
        isContextMenuVisible.value = true;
    };

    const contextMenuOptions = [
        {name:"Take Photo", callback:() =>{console.log("take photo")}},
        {name:"Choose From Library", callback:() =>{console.log("take photo")}},
        {name:"Upload Photo", callback:() =>{setGrabPhpto(true)}},
        {name:"Remove Photo", callback:() =>{setImage("/default_avatar.png")}},
    ];
    const toggleContextMenu = () => {
        isContextMenuVisible.value = !isContextMenuVisible.value;
    };
    const PhotoPickerChange = () => {

    };
</script>
<template>
    <div class="flex items-center justify-center">
        <div v-if="type === 'sm'" class="relative h-10 w-10">
            <NuxtImg :src="imgSrc" alt="avatar" class="rounded-full"/>
        </div>
        <div v-if="type === 'lg'" class="relative h-14 w-14">
            <NuxtImg :src="imgSrc" alt="avatar" class="rounded-full"/>
        </div>
        <div v-if="type === 'xl'" class="relative cursor-pointer z-0" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
            <div v-if="isHover" class="bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2">
                <div id="contextOpener" @click="showContextMenu($event)">
                    <Icon name="charm:camera" size="32"/>
                </div>
                <span id="contextOpener" @click="showContextMenu($event)">
                    Change <br/>Profile Photo
                </span>
            </div>
            <div class="h-60 w-60">
                <NuxtImg :src="imgSrc" alt="avatar" class="rounded-full"/>
                {{ isHover }}
            </div>
        </div>
        <!-- Context Menu -->
        <ContextMenu 
            :options="contextMenuOptions" 
            :cordinates="contextMenuCordinates"  
            :toggleContextMenu="toggleContextMenu"
            :isContextMenuVisible="isContextMenuVisible"
            v-if="isContextMenuVisible"
        />
        <!-- <PhotoPicker @change="{PhotoPickerChange}"/> -->
    </div>
</template>