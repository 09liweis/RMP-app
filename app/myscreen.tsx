import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthStore } from '@/stores/AuthStore';

export default function MyScreen() {
  const { isLoggedIn, userToken } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Screen</Text>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Welcome! You are logged in.</Text>
          <Text style={styles.text}>Your token: {userToken}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Please log in to see more content.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
