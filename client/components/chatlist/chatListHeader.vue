
<script setup>
import Avatar from '../common/Avatar.vue';
import  { useUserStore } from '@/store/user'
const userInfo = useUserStore();
</script>

<template>
    <div class="h-16 px-4 py-3 flex justify-between items-center">
        <div class="cursor-pointer">
            <Avatar type="sm" :img-src="userInfo.profileImage"/>
        </div>
    </div>
</template>
