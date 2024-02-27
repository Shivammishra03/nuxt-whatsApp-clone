<script lang="ts" setup>
import ChatList from './chatlist/chatList.vue';
import Empty from './emptyPage.vue';
</script>

<template>
    <div class="grid grid-cols-2 h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList/>
        <Empty/>
    </div>
</template>
