import { defineStore } from 'pinia';

interface changeCurrentChatUser {
   currentChatUser : any
}

export  const useCurrentChatUser = defineStore('changeCurrentChatUser',{
    state: (): changeCurrentChatUser => ({
        currentChatUser: undefined,
    }),
    actions: {
        setCurrentChatUser(currentChatUserData:any) {
            console.log('setCurrentChatUser', currentChatUserData);
            this.currentChatUser = currentChatUserData;
        },
    }
});