<script lang="ts" setup>
import ChatList from './chatlist/chatList.vue';
import Empty from './emptyPage.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "@/utils/firebaseConfig";
import { CHECK_USER_ROUTE } from "~/utils/ApiRoutes";
import { useUserStore } from '~/store/user';
import axios from 'axios';

const router = useRouter();
const userInfo =  useUserStore();

const redirectLogin = ref(false);
let data;

onAuthStateChanged(firebaseAuth, async(currentUser) =>{
    if(!currentUser){
        redirectLogin.value = true;
        return;
    } 
    if(!userInfo.email && currentUser.email) {
        data = await axios.post(CHECK_USER_ROUTE,{email: currentUser.email});
        const userData = data.data.data
        userInfo.updateUser({ displayName: userData.name || '', email: currentUser.email || '', profileImage: userData.profilePicture || '' });
    }
    if(!data.status) {
        router.push("/login");
    }
    console.log("currentUser",currentUser.email);
    console.log("currentUser",currentUser.name);
    console.log("currentUser",currentUser.email);
})

</script>

<template>
    <div class="grid grid-cols-[520px_minmax(900px,_1fr)_0px] h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList/>
        <Empty/>
    </div>
</template>
