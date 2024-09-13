import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/stores/AuthStore';



export default function PropertyLayout() {
  



  return (
    <ThemeProvider value={DefaultTheme} >
      <Stack>
        <Stack.Screen name="index" options={{headerShown:true,headerTitle:'Properties list'}} />
     
      </Stack>
    </ThemeProvider>
  );
}

