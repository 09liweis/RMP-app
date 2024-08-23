import { Image, StyleSheet, Platform, TextInput,Button } from 'react-native';
import {useState} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
   const [email, setEmail] = useState('');
   const [password,setPassword] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Log in</ThemedText>
       
      </ThemedView>
    <ThemedView style={styles.titleContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          keyboardType='email-address'
          autoCapitalize="none"
        >
        </TextInput>
       <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          placeholderTextColor="gray"
          
          autoCapitalize="none"
          secureTextEntry={true}
        >
        </TextInput>
        <Button title="Login"></Button>
      </ThemedView>
        
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
