import { defineStore } from 'pinia';

interface allContacts {
    contactsPage: boolean
}

export  const useAllContacts = defineStore('allcontacts',{
    state: (): allContacts => ({
        contactsPage: false,
    }),
    actions: {
        setContactPage(newContactPage:boolean) {
            this.contactsPage = newContactPage;
        },
    }
});