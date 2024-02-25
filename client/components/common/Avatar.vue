<script setup>
    import ContextMenu from './contextMenu.vue';
    import PhotoPicker from './PhotoPicker.vue';
    import PhotoLibrary from './PhotoLibrary.vue';
    import CapturePhoto from './CapturePhoto.vue';

    const isHover = ref(false);
    const isContextMenuVisible = ref(false);
    const setGrabPhoto = ref(false);
    const setShowPhotoLibrary = ref(false);
    const setShowCapturePhoto = ref(false);
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
        {name:"Take Photo", callback:() => {
            setShowCapturePhoto.value = true;
        }},
        {name:"Choose From Library", callback:() =>{
            setShowPhotoLibrary.value = true;
        }},
        {name:"Upload Photo", callback:() =>{
            setGrabPhoto.value = true;
            if(setGrabPhoto) {
                const data = document.getElementById("photoPicker");
                data.click();
                document.body.onfocus = (event) => {
                    setGrabPhoto.value = false;
                }
            }
        }},
        {name:"Remove Photo", callback:() =>{setImage("/default_avatar.png")}},
    ];
    const toggleContextMenu = () => {
        isContextMenuVisible.value = !isContextMenuVisible.value;
    };
    const emit = defineEmits(['update-image']);
    const  setImage = (src) => {
        emit('update-image', src);
    };
    const PhotoPickerChange = async (e) => {
        const file = e.target.files[0];
        const reader = new  FileReader();
        const data = document.createElement( "img" );
        reader.onload =  function(e){
           data.src = e.target.result;
           data.setAttribute("data-src", e.target.result);
        }
        reader.readAsDataURL(file);
        setTimeout(() =>{
            setImage(data.src);
        }, 100);
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
                <NuxtImg id="DpImg" :src="imgSrc" alt="avatar" class="rounded-full"/>
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
        <PhotoPicker :onchangeData="PhotoPickerChange"/>
        <PhotoLibrary v-if="setShowPhotoLibrary" @close="setShowPhotoLibrary = $event" @selected-avtar="setImage($event)"/>
        <CapturePhoto v-if="setShowCapturePhoto"/>
    </div>
</template>