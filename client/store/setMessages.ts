import { defineStore } from 'pinia';

interface setChatMessages {
   messages : object,
   addMessage: string
}

export  const setMessage = defineStore('setChatMessages',{
    state: (): setChatMessages => ({
        messages: [],
        addMessage: '',
    }),
    actions: {
        setUserMessages(ChatMessageData:any) {
            console.log('setCurrentChatUser', ChatMessageData[0].senderId);
            this.messages = ChatMessageData;
        },
    }
});