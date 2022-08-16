import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Hero from './.expo/components/Hero';
import PhotoList from './.expo/components/PhotoList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Hero />
    <PhotoList />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontsize: 32,
  }
});
