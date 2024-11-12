import { create } from "zustand";
import { useRouter } from "expo-router";
import axios from "axios";
// const router = useRouter();
export const useAuthStore = create((set) => ({
    isLoggedIn: false,
    userToken: null,
    login: (email, password) => {
        console.log('email:',email);
        console.log('password',password);
       return axios.post('https://rental-management-platform.vercel.app/api/login',{
            email: email,
            password: password,
          }).then(res => {
            console.log(res.data)
            if(res.data.success){
              set({ isLoggedIn: true, userToken: res.data.token });
              console.log('login success');
              return true;
            }   
            return false;
        }).catch(err => {
            console.error(err)
            return false;
        })
        //navigate to home page using expo router
        // router.navigate('/');
    },
    logout: () => {
        set({ isLoggedIn: false, userToken: null });
        console.log('user logged out');
        console.log('isLoggedIn: ');
        return true;
        //navigate to login page using expo router
        // router.navigate('/login');
       
    },
}));