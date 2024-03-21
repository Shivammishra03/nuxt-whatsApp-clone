import { defineStore } from 'pinia';

interface setSocketData {
   socket : string
}

export  const setSocket = defineStore('setSocketData',{
    state: (): setSocketData => ({
        socket: '',
    }),
    actions: {
        setUserSocket(socketData:any) {
            this.socket = socketData;
        },
    }
});