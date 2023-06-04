import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider, tw } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={tw`text-red-500`}>Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
    </TailwindProvider>
    </NavigationContainer>
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
