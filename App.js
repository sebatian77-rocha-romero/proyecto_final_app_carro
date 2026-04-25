import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "./src/screens/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}