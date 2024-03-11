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
  </div>
</template>
