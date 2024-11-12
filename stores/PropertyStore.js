import { create } from 'zustand';
import axios from 'axios';
export const usePropertyStore = create((set) => ({
    properties: [],
    propertiesFetched: false,
    fetchProperties: (userToken) => {
        axios.get('https://rental-management-platform.vercel.app/api/properties',{
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }).then(res => {
            console.log('res',res.data);
            set({ properties: res.data.properties, propertiesFetched: true });
        }).catch(err => {
            console.error(err);
        })
    } 
}))