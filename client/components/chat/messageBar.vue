<script lang="ts" setup>
import { ref, defineEmits } from  'vue';
import axios from 'axios';
import { ADD_MESSAGE_ROUTE } from '~/utils/ApiRoutes';
import { useUserStore } from '@/store/user';
import { setSocket } from '@/store/setSocket';
import { useCurrentChatUser } from '@/store/currentChatUser';

console.log("ADD_MESSAGE_ROUTE", ADD_MESSAGE_ROUTE)
const textMessageVal =  ref('');

const userInfo = useUserStore();
const currentChatUser = useCurrentChatUser();
const useSocket = setSocket();

const emit = defineEmits(["send-msg"])

console.log("useSocket",useSocket)

// const sendMessage = async (message:any) => {
//     if (textMessageVal.value) {
//         console.log('send message:', textMessageVal.value);
//         console.log('send message:', message);

//     } 
//     try {
//         const data = await axios.post(ADD_MESSAGE_ROUTE,{
//             to:currentChatUser.currentChatUser.id,
//             from:userInfo.id,
//             message
//         })

//     } catch(err) {
//         console.log(err)
//     }

// }
const sendMessage = async (message: string) => {
    if (!message) {
        // Handle case where message is empty
        return;
    }

    try {
        const response = await axios.post(ADD_MESSAGE_ROUTE, {
            to: currentChatUser.currentChatUser.id,
            from: userInfo.id,
            message: message
        });

        useSocket.socket.emit("send-msg",{
            to: currentChatUser.currentChatUser.id,
            from: userInfo.id,
            message: response.data.message
        });
        
        console.log('Message sent successfully:', response.data);
        // Optionally, you can do something with the response data here

        // Clear the input field after sending the message
        textMessageVal.value = '';
    } catch (error) {
        console.error('Error sending message:', error);
        // Handle the error, such as displaying an error message to the user
    }
};

</script>

<template>
    <div class="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
        <div class="flex gap-6">
            <Icon name="emojione-monotone:smiling-face" title="Emoji" color="#aebac1" size="22" class="cursor-pointer"/>
            <Icon name="foundation:paperclip" title="attachment" color="#aebac1" size="22" class="cursor-pointer"/>
        </div>
        <div class="w-full rounded-lg h-10 flex items-center">
            <input type="text" v-model="textMessageVal" placeholder="Type a message" class="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"/>
        </div>
        <div class="flex w-10 items-center justify-center">
            <button>
                <Icon name="material-symbols:send" color="#aebac1" size="22" @click="sendMessage(textMessageVal)"/>
            </button>
            <button>
                <Icon name="material-symbols:mic-rounded"  color="#aebac1" size="22"/>
            </button>
        </div>
    </div>
</template>
