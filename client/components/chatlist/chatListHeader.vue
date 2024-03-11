<script setup>
import Avatar from '../common/Avatar.vue';
import { useUserStore } from '@/store/user';

const userInfo = useUserStore();
</script>

<template>
  <div v-if="userInfo" class="h-16 px-4 py-3 flex justify-between items-center">
    <div class="cursor-pointer">
      <Avatar v-if="userInfo.profileImage" type="sm" :imgSrc="userInfo.profileImage"/>
    </div>
    <div class="flex gap-6 items-center">
      <div class="cursor-pointer" title="New Chat">
        <Icon name="material-symbols:chat-rounded" color="#aebac1"/>
      </div>
      <div class="cursor-pointer" title="Menu">
        <Icon name="heroicons-outline:dots-vertical" color="#aebac1"/>
      </div>
    </div>
  </div>
</template>
