import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../screens/ThemeContext";

import HomeScreen from "../screens/HomeScreen";
import EquipoScreen from "../screens/EquipoScreen.js";
import DescripcionScreen from "../screens/DescripcionScreen.js";
import ComponentesScreen from "../screens/ComponentesScreen.js";
import FuncionamientoScreen from "../screens/FuncionamientoScreen.js";
import GaleriaScreen from "../screens/GaleriaScreen.js";
import ConclusionesScreen from "../screens/ConclusionesScreen.js";
import CreditosScreen from "../screens/Creditosscreen.js";
import AjustesScreen from "../screens/AjustesScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack de Inicio → todas las pantallas de contenido
function HomeStack({ theme }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
      <Stack.Screen name="Equipo" component={EquipoScreen} options={{ title: "Equipo" }} />
      <Stack.Screen name="Descripcion" component={DescripcionScreen} options={{ title: "Descripción" }} />
      <Stack.Screen name="Componentes" component={ComponentesScreen} options={{ title: "Componentes" }} />
      <Stack.Screen name="Funcionamiento" component={FuncionamientoScreen} options={{ title: "Funcionamiento" }} />
      <Stack.Screen name="Galeria" component={GaleriaScreen} options={{ title: "Galería" }} />
      <Stack.Screen name="Conclusiones" component={ConclusionesScreen} options={{ title: "Conclusiones" }} />
      <Stack.Screen name="Creditos" component={CreditosScreen} options={{ title: "Créditos" }} />
      <Stack.Screen name="Ajustes" component={AjustesScreen} options={{ title: "Ajustes" }} />
    </Stack.Navigator>
  );
}

// Stack de Info (Descripción + Componentes + Funcionamiento como tabs secundarios)
function InfoStack({ theme }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Descripcion" component={DescripcionScreen} options={{ title: "Descripción" }} />
      <Stack.Screen name="Componentes" component={ComponentesScreen} options={{ title: "Componentes" }} />
      <Stack.Screen name="Funcionamiento" component={FuncionamientoScreen} options={{ title: "Funcionamiento" }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Inicio: "home",
              Info: "information-circle",
              Galería: "images",
              Más: "ellipsis-horizontal",
            };
            return <Ionicons name={icons[route.name] || "circle"} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: theme.colors.card, borderTopColor: theme.colors.border },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.subtext,
        })}
      >
        <Tab.Screen name="Inicio">
          {(props) => <HomeStack {...props} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen name="Info">
          {(props) => <InfoStack {...props} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen
          name="Galería"
          component={GaleriaScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: theme.colors.card },
            headerTintColor: theme.colors.text,
            title: "Galería",
          }}
        />

        <Tab.Screen name="Más">
          {() => (
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: theme.colors.card },
                headerTintColor: theme.colors.text,
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen name="Conclusiones" component={ConclusionesScreen} options={{ title: "Conclusiones" }} />
              <Stack.Screen name="Creditos" component={CreditosScreen} options={{ title: "Créditos" }} />
              <Stack.Screen name="Ajustes" component={AjustesScreen} options={{ title: "Ajustes" }} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}