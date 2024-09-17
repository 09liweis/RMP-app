import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'expo-router';
const account = () => {
  const router = useRouter();
  const { logout, isLoggedIn, userToken } = useAuthStore();
 

  // Update the tryLogout function
  const tryLogout = async () => {
    console.log('tryLogout');
    await logout();
    
    router.navigate('/login');
    console.log('store: isLoggedIn: ', isLoggedIn);
    
  };



  return (
    
     <ParallaxScrollView
     headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
     headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
     <ThemedView style={styles.titleContainer}>
       <ThemedText type="title">User Account</ThemedText>
     </ThemedView>
  
    <ThemedView>
      <ThemedText className="text-center text-blue-600">
        Account
      </ThemedText>
      <ThemedText>User Token: {userToken}</ThemedText>
    </ThemedView>
     <ThemedView style={styles.buttonContainer}>
       <Pressable
         onPress={tryLogout}
         className="bg-teal-500 p-2 text-center rounded-md w-full"
       >
         <ThemedText className="text-white text-center">Sign Out</ThemedText>
       </Pressable>
     </ThemedView>
     </ParallaxScrollView>
  )
}

export default account

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  signOutButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
});