<script lang="ts" setup>
import ChatList from './chatlist/chatList.vue';
import Empty from './emptyPage.vue';
import chat from './chat/chat.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "@/utils/firebaseConfig";
import { CHECK_USER_ROUTE, GET_MESSAGE_ROUTE } from "~/utils/ApiRoutes";
import { useUserStore } from '~/store/user';
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import { useCurrentChatUser } from '@/store/currentChatUser';
import { setMessage } from '~/store/setMessages';
const currentChatUserData = useCurrentChatUser();

const router = useRouter();
const userInfo =  useUserStore();
const useSetMessages = setMessage()

const redirectLogin = ref(false);
const checkAuthState = () => {
    onAuthStateChanged(firebaseAuth, async(currentUser) =>{
        if(!currentUser){
            redirectLogin.value = true;
            return;
        } 
        if(!userInfo.email && currentUser.email) {
            const {data} = await axios.post(CHECK_USER_ROUTE,{email: currentUser.email});
            // console.log("datatatatatattata",data)
            if(!data.status) {
                router.push("/login");
            }
            const userData = data.data;
            userInfo.updateUser({ 
                id:userData.id || '',
                displayName: userData.name || '', 
                email: currentUser.email || '', 
                profileImage: userData.profilePicture || '' 
            });
        }
    });
};

const getMessages = async () => {
    const {data:messages} = await axios.get(`${GET_MESSAGE_ROUTE}/${userInfo.id}/${currentChatUserData.currentChatUser.id}`);
    // console.log("",messages);
    useSetMessages.setUserMessages(messages);
}

onMounted(()=>{
    // if(redirectLogin.value) {
    //     router.push('/login');
    // }
    checkAuthState()
});

const isChatVisible = ref(false);
watch(() => currentChatUserData.currentChatUser, (newValue, oldValue) => {
    if (newValue) {
        isChatVisible.value = true;
        getMessages()
    }
});
</script>

<template>
    <div class="grid grid-cols-[380px_minmax(900px,_1fr)_0px] h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList/>
        <chat v-show="isChatVisible"/> 
        <Empty/> 
    </div>
</template>
