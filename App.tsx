
// import { LoginScreen } from './src/screens/LoginScreen';
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { SafeAreaView } from "react-native";

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>

      <QueryClientProvider client={queryClient}>
        <StarshipFeedScreen />
      </QueryClientProvider>
    </SafeAreaView >

  );
}

export default App;