import { defineStore } from 'pinia';

interface setSocketData {
    addMessage : string
}

export  const setNewMessage = defineStore('setSocketData',{
    state: (): setSocketData => ({
        addMessage: '',
    }),
    actions: {
        addNewMessages(message:string){
            this.addMessage = message;
        }
    }
});