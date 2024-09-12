import { Image, StyleSheet, Platform, TextInput, Button, View, Pressable } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { login } = useAuthStore();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('https://rental-management-platform.vercel.app/api/register', {
        email,
        password,
      });

      if (response.data.success) {
        login();
        router.replace('/(tabs)');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

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
        <ThemedText type="title">Sign Up</ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          keyboardType='email-address'
          autoCapitalize="none"
          style={styles.credentialInput}
          autoFocus={true}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.credentialInput}
        />
        <TextInput
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.credentialInput}
        />
        <Pressable style={styles.primaryButton} onPress={handleRegister}>
          <ThemedText style={{color: 'white'}}>Register</ThemedText>
        </Pressable>
        <ThemedView>
          <ThemedText>Already have an account?{' '}
            <Link href='/login'>
              <ThemedText style={styles.linkText}>Log in</ThemedText>
            </Link>
          </ThemedText>
        </ThemedView>
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
    flex: 1,
    gap: 18,
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
    width: "100%",
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  primaryButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
