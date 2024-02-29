<template>
    <div class="flex justify-center items-center panel-header-background dark:bg-panel-header-dark h-screen w-screen flex-col gap-6">
        <div class="flex justify-center items-center gap-2 text-white">
            <NuxtImg src="/whatsapp.gif" height="300" width="300"/>
            <span class="text-7xl">WhatsApp</span>
        </div>
        <button class="flex text-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" @click="handleLogin()">
            <div class="img-section">
                <Icon name="logos:google-icon" size="32"/>
            </div>
            <span class="text-white text-2xl">Login with Google</span>
        </button>
    </div>
</template>

<script setup>
import { firebaseAuth } from "@/utils/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { CHECK_USER_ROUTE } from "~/utils/ApiRoutes";
import axios from  'axios';
import {useUserStore} from "../store/user"; 

const router = useRouter();
const userStore = useUserStore();

console.log(userStore)

const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
        user:{displayName:name, email, photoURL: profileImage},
    } =  await signInWithPopup(firebaseAuth, provider); 
    try {
        if(email) {
            const {data} = await axios.post(CHECK_USER_ROUTE,{email});
            console.log("datatatatta",data);
            console.log("datatatattaStatus",data.status);
            if(!data.status) {
                userStore.updateUser({ displayName: name || '', email: email || '', profileImage: profileImage || '' });
                router.push("/onboarding");
            } else {
                userStore.updateUser({ displayName: name || '', email: email || '', profileImage: profileImage || '' });
                router.push("/");
            }

        }
    } catch (err) {
        console.log("err", err);
    }
};
</script>

<style>
.panel-header-background  {
    background-color: #202c33;
}
</style>