import { defineStore } from 'pinia';

interface UserData {
  id: any,
  displayName: string;
  email: string;
  profileImage: string;
}

export const useUserStore = defineStore('user',{
  state: (): UserData => ({
    id:'',
    displayName: '',
    email: '',
    profileImage: '',
  }),
  actions: {
    // Action to update user data
    updateUser(userData: UserData) {
      this.id = userData.id || '';
      this.displayName = userData.displayName;
      this.email = userData.email;
      this.profileImage = userData.profileImage;
      // console.log("userData", userData);
    },
  },
});