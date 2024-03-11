<script lang="ts" setup>
import ChatList from './chatlist/chatList.vue';
import Empty from './emptyPage.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "@/utils/firebaseConfig";
import { CHECK_USER_ROUTE } from "~/utils/ApiRoutes";
import { useUserStore } from '~/store/user';
import { onMounted } from 'vue'
import axios from 'axios';

const router = useRouter();
const userInfo =  useUserStore();

const redirectLogin = ref(false);

onAuthStateChanged(firebaseAuth, async(currentUser) =>{
    if(!currentUser){
        redirectLogin.value = true;
        return;
    } 
    if(!userInfo.email && currentUser.email) {
        const {data} = await axios.post(CHECK_USER_ROUTE,{email: currentUser.email});
        console.log("datatatatatattata",data)
        if(!data.status) {
            router.push("/login");
        }
        const userData = data.data;
        userInfo.updateUser({ 
            displayName: userData.name || '', 
            email: currentUser.email || '', 
            profileImage: userData.profilePicture || '' 
        });
    }
});
onMounted(()=>{
    if(redirectLogin.value) {
        router.push('/login');
    }
});

</script>

<template>
    <div class="grid grid-cols-[520px_minmax(900px,_1fr)_0px] h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList/>
        <Empty/>
    </div>
</template>
