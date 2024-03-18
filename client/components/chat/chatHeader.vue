<script lang="ts" setup>
import Avatar from '../common/Avatar.vue';
import { useCurrentChatUser } from '@/store/currentChatUser';
const currentChatUserData = useCurrentChatUser();
// const currentChatUserInfo = currentChatUserData.currentChatUser
// console.log("currentChatUserInfo",currentChatUserInfo);
const currentUserProfileImg = ref('/default_avatar.png');
const currentUserName = ref('Anonymous');

watch(() => currentChatUserData.currentChatUser, (newValue, oldValue) => {
  if (newValue) {
    currentUserProfileImg.value = newValue.profilePicture;
    currentUserName.value = newValue.name;
  }
});

</script>

<template>
    <div class="h-16 px-4 py-3 flex items-center justify-between bg-panel-header-background z-10">
        <div class="flex items-center justify-center gap-6">
            <!-- {{ currentUserProfileImg }} -->
            <Avatar type="sm" :imgSrc="currentUserProfileImg" />
            <div class="flex flex-col">
                <span class="text-primary-strong">{{currentUserName}}</span>
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
