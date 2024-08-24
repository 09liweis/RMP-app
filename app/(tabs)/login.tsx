import { Image, StyleSheet, Platform, TextInput,Button,View, Pressable } from 'react-native';
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
      <View style={styles.formContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          keyboardType='email-address'
          autoCapitalize="none"
          style={styles.credentialInput  }
          autoFocus={true}
        >
        </TextInput>
       <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          placeholderTextColor="gray"
          
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.credentialInput  }
        >
        </TextInput>
        <Pressable  style={styles.primaryButton} onPress={()=>alert('button pressed')}>
          <ThemedText type="title">Login</ThemedText>
        </Pressable>
      </View>
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
  formContainer: {
    flex:1,
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
  credentialInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal:15,
    borderRadius:15,
  },
  primaryButton:{
    backgroundColor:'red',
    color:'white',
    borderRadius:15,
    paddingHorizontal:15,
    paddingVertical:10,
  }
});