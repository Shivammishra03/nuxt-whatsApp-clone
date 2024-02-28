<script lang="ts" setup>
import ChatList from './chatlist/chatList.vue';
import Empty from './emptyPage.vue';
</script>

<template>
    <div class="grid grid-cols-[520px_minmax(900px,_1fr)_0px] h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList/>
        <Empty/>
    </div>
</template>
