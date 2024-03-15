
<script  setup>
import ChatListHeader from "./chatListHeader.vue";
import SearchBar  from './searchBar.vue';
import List from './list.vue';
import ContactsList from "./contactsList.vue";

const setPageType = ref('default');

const handleContactPage = (pageStatus) => {
    if(pageStatus) {
        setPageType.value = 'all-contacts';
    } else {
        setPageType.value = 'default'
    }
};

</script>

<template>
    <div class="bg-panel-header-background flex flex-col max-h-screen z-20">
        <div v-if ="setPageType === 'default'" >
            <ChatListHeader @contactPageStatus="handleContactPage"/>
            <SearchBar/>
            <List/>
        </div>
        <ContactsList v-else @pageStatus="handleContactPage"/>
    </div>
</template>
