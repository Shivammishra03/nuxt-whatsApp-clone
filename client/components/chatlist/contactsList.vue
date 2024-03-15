<script lang="ts" setup>
import { onMounted } from 'vue';
import axios from 'axios';
import { GET_ALL_CONTACTS } from '~/utils/ApiRoutes';
import { useAllContacts } from '@/store/allContacts'
import { defineEmits } from 'vue';

const contacts = useAllContacts()

const setAllContacts = ref([]);
onMounted(async () => {
    try {
        const {data:{users}} = await axios.get(GET_ALL_CONTACTS);
        setAllContacts.value = users;
    }catch(err) {
        console.log(err);
    }
});
const emit = defineEmits(['pageStatus']);

const getBackToAllContactsPage = () => {
  contacts.setContactPage(false);
  emit( "pageStatus", contacts.contactsPage)
};
</script>

<template>
    <div class="h-full flex flex-col">
        <div class="h-24 flex items-end px-3 py-4">
            <div class="flex items-center gap-12 text-white">
                <Icon name="material-symbols:arrow-back" size="24" class="cursor-pointer" @click="getBackToAllContactsPage" />
                <span>New Chat</span>
            </div>
        </div>
        <div class="bg-search-input-container-background h-full flex-auto overflow-auto cusrom-scrollbar">
            <div class="flex py-3 items-center gap-3 h-14">
                <div class="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4">
                    <Icon name="heroicons-solid:magnifying-glass" color="#aebac1" class="cursor-pointer"/>
                    <div>
                        <input 
                            type="text"
                            placeholder="Search Contacts"
                            class="bg-transparent text-sm focus:outline-none text-white w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
