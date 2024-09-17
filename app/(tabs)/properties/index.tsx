import { Image, StyleSheet, Platform } from 'react-native';
import { useState,useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuthStore } from '@/stores/AuthStore';
import { usePropertyStore } from '@/stores/PropertyStore';
import { FlatList } from 'react-native';

export default function properties() {
  const [isLoading, setIsLoading] = useState(true);
  const {userToken } = useAuthStore();
  const { properties, propertiesFetched, fetchProperties} = usePropertyStore();

  useEffect(() => {
    fetchProperties(userToken);
  },[userToken])


  return (
    
    <ThemedView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>

        <ThemedText type="title">Properties</ThemedText>
        <HelloWave />
      </ThemedView>
     
      <ThemedView>
        <FlatList
          data={properties}
          renderItem={({ item }) => (
            <ThemedView className="border border-gray-300 rounded-lg mt-2 px-6 py-5 shadow-sm ">
              <ThemedText className="text-sm font-medium text-gray-900">{item.name}</ThemedText>
              <ThemedText className="mt-2 text-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{item.ptype}</ThemedText>
            </ThemedView>
          )}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={
            <ThemedText>No properties found.</ThemedText>
          }
        />
      </ThemedView>
      
    </ThemedView>
   
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
