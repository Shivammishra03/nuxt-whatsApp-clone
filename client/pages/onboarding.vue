<script setup>
// import Input from '~/components/common/input.vue';
import {useUserStore} from  '~/store/user';
import Avatar from '~/components/common/Avatar.vue';
const userInfo = useUserStore();

const name = ref(userInfo?.name ||'');
const about = ref('');
const image = ref('/default_avatar.png');

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
            </div>
            <div>
                <Avatar type="xl" :img-src="image" @update-image="image=$event"/>
            </div>
        </div>
    </div>
</template>