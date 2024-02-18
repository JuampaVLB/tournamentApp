import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./navigation/navigation";



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
