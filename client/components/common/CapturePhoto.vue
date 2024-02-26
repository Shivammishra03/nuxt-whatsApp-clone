<script setup>
    import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

const videoRef = ref(null);
const emit = defineEmits(["capturedImg", "capturePhotoValue"]);

const hide = (value) => {
    emit("capturePhotoValue", value);
};

let mediaStream = null;

const startCamera = async () => {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
        if (videoRef.value) {
            videoRef.value.srcObject = mediaStream;
        }
    } catch (error) {
        console.error('Error starting camera:', error);
    }
};

const stopCamera = () => {
    if (mediaStream) {
        const tracks = mediaStream.getTracks();
        tracks.forEach((track) => track.stop());
        mediaStream = null;
    }
};

onMounted(() => {
    startCamera();
});

onUnmounted(() => {
    stopCamera();
});

const capturePhoto = () => {
    if (videoRef.value && videoRef.value.srcObject) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (videoRef.value.videoWidth && videoRef.value.videoHeight) {
            canvas.width = videoRef.value.videoWidth;
            canvas.height = videoRef.value.videoHeight;
            context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);
            const imageSrc = canvas.toDataURL('image/jpeg');
            emit("capturedImg", imageSrc);
            emit("capturePhotoValue", false);
        }
    }
};
</script>

<template>
    <div class="absolute w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3">
      <div class="flex flex-col gap-4 w-full items-center justify-center">
        <div class="pt-2 pr-2 cursor-pointer flex items-end justify-end" @click="hide(false)">
            <Icon name="material-symbols:close-rounded" size="25"/>
        </div>
        <div class="flex justify-center">
          <video id="video" width="200" autoplay ref="videoRef"></video>
        </div>
        <button class="h-16 w-16 bg-white rounded-full cursor-pointer border" @click="capturePhoto"></button>
      </div>
    </div>
</template>