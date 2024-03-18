import { defineStore } from 'pinia';

interface setChatMessages {
   messages : object
}

export  const setMessage = defineStore('setChatMessages',{
    state: (): setChatMessages => ({
        messages: [],
    }),
    actions: {
        setUserMessages(ChatMessageData:any) {
            console.log('setCurrentChatUser', ChatMessageData[0].senderId);
            this.messages = ChatMessageData;
        },
    }
});