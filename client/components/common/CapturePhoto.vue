<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    const videoRef = ref(null);

    const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
  
        if (videoRef.value) {
            videoRef.value.srcObject = stream;
        }
    };

    onMounted(() => {
        startCamera();
    });

    onUnmounted(() => {
        if (videoRef.value && videoRef.value.srcObject) {
            const tracks = videoRef.value.srcObject.getTracks();
            tracks.forEach((track) => track.stop());
        }
    });

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        canvas.getContext('2d').drawImage(videoRef.value,0,0,300,150);
        const imageSrc=canvas.toDataURL('image/jpeg');
    };
</script>

<template>
    <div class="absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3">
      <div class="flex flex-col gap-4 w-full items-center justify-center">
        <div class="pt-2 pr-2 cursor-pointer flex items-end justify-end" @click="hide(false)">
            <Icon name="material-symbols:close-rounded" size="25"/>
        </div>
        <div class="flex justify-center">
          <video id="video" width="400" autoplay ref="videoRef"></video>
        </div>
        <button class="h-16 w-16 bg-white rounded-full cursor-pointer border" @click="capturePhoto"></button>
      </div>
    </div>
</template>