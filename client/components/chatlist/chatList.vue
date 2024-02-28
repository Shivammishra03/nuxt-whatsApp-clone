
<script  setup>
import ChatListHeader from "./ChatListHeader.vue";
import SearchBar  from './searchBar.vue';
import List from './list.vue';
</script>

<template>
    <div class="bg-panel-header-background flex flex-col max-h-screen z-20">
        <ChatListHeader/>
        <SearchBar/>
        <List/>
    </div>
</template>
