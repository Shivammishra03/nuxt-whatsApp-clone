<script lang="ts" setup>
import Avatar from '../common/Avatar.vue';

</script>

<template>
    <div class="h-16 px-4 py-3 flex items-center justify-between bg-panel-header-background z-10">
        <div class="flex items-center justify-center gap-6">
            <Avatar type="sm" :imgSrc="'/profileImage'" />
            <div class="flex flex-col">
                <span class="text-primary-strong"> Demo</span>
                <span class="text-secondary text-sm">Online / Offline</span>
            </div>
        </div>
        <div class="flex gap-6 items-center justify-center">
            <div class="cursor-pointer">
                <Icon name="material-symbols:call" color="#aebac1" />
            </div>
            <div class="cursor-pointer">
                <Icon name="fluent:video-32-filled" color="#aebac1"/>
            </div>
            <div class="cursor-pointer">
                <Icon name="heroicons-solid:magnifying-glass" color="#aebac1"/>
            </div>
            <div class="cursor-pointer">
                <Icon name="heroicons-outline:dots-vertical" color="#aebac1"/>
            </div>
        </div>
    </div>
</template>
