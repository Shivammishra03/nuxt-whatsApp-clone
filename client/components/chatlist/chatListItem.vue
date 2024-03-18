<script setup>
import {defineProps} from  'vue';
import Avatar  from '@/components/common/Avatar.vue';
import { useCurrentChatUser } from '@/store/currentChatUser';
// import { useAllContacts } from '@/store/allContacts'

// const contacts = useAllContacts()
const currentChatUser = useCurrentChatUser();
const props = defineProps({
    contactData: Array,
    isContactPage: Boolean
});

const emit = defineEmits(['pageStatus']);

const handleContactClick = (user) => {
    // debugger
    currentChatUser.setCurrentChatUser(user);
    // contacts.setContactPage(false);
    emit('pageStatus', false)
};

</script>

<template>
    <div v-for="contact in props.contactData" :key="contact.id" class="flex cursor-pointer items-center hover:bg-background-default-hover" @click="handleContactClick(contact)">
        <div class="min-w-fit px-5 pt-3 pb-1">
            <Avatar type="lg" :imgSrc="contact?.profilePicture"/>
        </div>
        <div class="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
            <div class="flex justify-between">
                <div>
                    <span class="text-white">{{ contact?.name }}</span>
                </div>
            </div>
            <div class="flex border-b border-conversation-border pb-2 pt-1 p3-2">
                <div class="flex justify-between w-full">
                    <span class="text-secondary line-clamp-1 text-sm">{{ contact?.about || "\u00A0" }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
