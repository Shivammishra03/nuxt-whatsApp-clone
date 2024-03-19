<script setup>
import MessageStatus from '@/components/common/messageStatus.vue'

import{ useUserStore } from '@/store/user';
import { setMessage } from '@/store/setMessages';
import { useCurrentChatUser } from '@/store/currentChatUser';

import { calculateTime } from '@/utils/calculateTime';

const userInfo =  useUserStore();
const currentChatUser =  useCurrentChatUser();
const messages = setMessage();

console.log("messages", messages)
console.log("currentChatUser", currentChatUser)

</script>

<template>
    <div class="h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar">
        <div class="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 z-0"></div>
        <div class="mx-10 my-6 relative bottom-0 z-40 left-0">
            <div class="flex w-full">
                <div class="flex flex-col justify-end w-full gap-1 overflow-auto">
                    <div v-for="(message, index) in messages.messages" :key="message.id" :class="(message.senderId === currentChatUser.currentChatUser.id? ' justify-start ':' justify-end ') +'flex'">
                        <div :class="(message.senderId === currentChatUser.currentChatUser.id ? ' bg-incoming-background tail-in ' : ' bg-outgoing-background tail-out ')+ 'text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%]'">
                            <span class="break-all">{{ message.message }}</span>
                            <div class="flex items-end gap-1">
                                <span class="text-bubble-meta text-[11px] pt-1 min-w-fit">{{ calculateTime(message.createdAt) }}</span>
                                <span v-if="message.senderId === userInfo.id">
                                    <!-- Sender Message Status -->
                                    <MessageStatus :messageStatus="message.messageStatus"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-chat-background {
    background-image: url('/chat-bg.png');
}
/* .tail-in::before {
    position: absolute;
    top: 0;
    z-index: 100;
    display: block;
    width: 8px;
    height: 13px;
    content: '';
    background: #202c33;
} */
</style>
