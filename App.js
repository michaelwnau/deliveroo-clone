import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider, tw } from "nativewind";

export default function App() {
  return (
    <TailwindProvider>
    <View style={styles.container}>
      <Text style={tw`text-red-500`}>Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
