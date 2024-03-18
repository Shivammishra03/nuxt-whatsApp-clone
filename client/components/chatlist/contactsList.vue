<script setup>
import { onMounted, computed } from 'vue';
import axios from 'axios';
import { GET_ALL_CONTACTS } from '~/utils/ApiRoutes';
import { useAllContacts } from '@/store/allContacts'
import { defineEmits } from 'vue';
import ChatListItem from './chatListItem.vue';

const contacts = useAllContacts()

const setAllContacts = ref([]);
const isContactPage = ref(true);
onMounted(async () => {
    try {
        const {data:{users}} = await axios.get(GET_ALL_CONTACTS);
        setAllContacts.value = users;
        const keys = Object.keys(setAllContacts.value);
        const initials = keys.map(key => key.charAt(0));
        // console.log("setAllContacts.valuekeys",keys)
        // console.log("setAllContacts.valuekeysinitials",initials)

        // console.log("setAllContacts.value",setAllContacts.value)
    }catch(err) {
        console.log(err);
    }
});
const groupedUsers = computed(() => {
  const keys = Object.keys(setAllContacts.value);
  return keys.map(key => ({
    initialLetter: key.charAt(0),
    contacts: setAllContacts.value[key],
  }));
});
// console.log('groupedUsers', groupedUsers);
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
        <div class="bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar">
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
            <!-- Show all the available contact list -->
            <div v-for="(group, index) in groupedUsers" :key="index">
                <div class="text-teal-light pl-10 py-5">{{ group.initialLetter }}</div>
                <ChatListItem :contactData="group.contacts"  :isContactPage="isContactPage" @pageStatus="getBackToAllContactsPage()"/>
            </div>
        </div>
    </div>
</template>
