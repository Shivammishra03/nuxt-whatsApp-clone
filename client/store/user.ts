import { defineStore } from 'pinia';

interface UserData {
  displayName: string;
  email: string;
  profileImage: string;
}

export const useUserStore = defineStore('user',{
  state: (): UserData => ({
    displayName: '',
    email: '',
    profileImage: '',
  }),
  actions: {
    // Action to update user data
    updateUser(userData: UserData) {
      this.displayName = userData.displayName;
      this.email = userData.email;
      this.profileImage = userData.profileImage;
      console.log("userData", userData);
    },
  },
});