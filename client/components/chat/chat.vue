<script lang="ts" setup>
import chatHeader from './chatHeader.vue';
import chatContainer from './chatContainer.vue';
import messageBar from './messageBar.vue';

</script>

<template>
    <div class="border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col h-[100vh] z-10 ">
        <chatHeader  />
        <chatContainer  />
        <messageBar  />
    </div>
</template>
