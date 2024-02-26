<script setup>
// import Input from '~/components/common/input.vue';
import {useUserStore} from  '~/store/user';
import Avatar from '~/components/common/Avatar.vue';
import axios from 'axios';
const userInfo = useUserStore();
const router = useRouter();

const email =  userInfo.email;
        console.log("email",userInfo.displayName)
        console.log("email",userInfo.email)

const name = ref(userInfo.displayName?userInfo.displayName:'');
const about = ref('');
const image = ref('/default_avatar.png');
const validateDetails = () => {
    if(name.value.length < 3){
        return false;
    }
    return true;
};
const onboardUserHandler = async () => {
    if(validateDetails) {
        const emailId =  userInfo.email;
        // console.log("email",email)
        try {
            const data = await axios.post(ONBOARD_USER_ROUTE, {
                email,
                name:name.value,
                about:about.value,
                image:image.value
            });
            if(data.status) {
                userInfo.updateUser({ 
                    name: name.value, 
                    email: emailId, 
                    profileImage: image.value,
                    status:about.value 
                });
                router.push("/");
            }
        } catch(err) {
            console.log("error",err)
        }
    }
};

</script>
<template>
    <div class="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
        <div class="flex items-center justify-center">
            <NuxtImg src="/whatsapp.gif" alt="WhatsApp GIF" height="250" width="250"/>
            <span class="text-7xl">Whatsapp</span>
        </div>
        <h2 class="text-2xl">Create Your Profile</h2>
        <div class="flex gap-6 mt-6">
            <div class="flex flex-col items-center justify-center my-5 gap-6">
                <div class="flex gap-1 flex-col">
                    <label for="dispalyName" class="text-teal-light text-lg px-1">Display Name</label>
                    <div>
                        <input type="text" name="dispalyName" class="bg-input-background text-start focus:outline-none" v-model="name" />
                    </div>
                </div>
                <div class="flex gap-1 flex-col">
                    <label for="about" class="text-teal-light text-lg px-1">About</label>
                    <div>
                        <input type="text" name="about" class="bg-input-background text-start focus:outline-none" v-model="about" />
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button class="flex items-center justify-center gap-7 bg-gray-700" @click="onboardUserHandler()">
                        Create Profile
                    </button>
                </div>
            </div>
            <div>
                <Avatar type="xl" :img-src="image" @update-image="image=$event"/>
            </div>
        </div>
    </div>
</template>