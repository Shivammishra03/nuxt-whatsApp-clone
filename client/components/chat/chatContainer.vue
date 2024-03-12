<script lang="ts" setup>

</script>

<template>
    <div class="h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar">
        <div class="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 z-0"></div>
        <div class="flex w-full">
            <div class="flex flex-col justify-end w-full gap-1 overflow-auto">

            </div>
        </div>
    </div>
</template>

<style>
.bg-chat-background {
    background-image: url('/chat-bg.png');
}
</style>
