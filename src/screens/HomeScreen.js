import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from "react";
import { ThemeContext } from "../screens/ThemeContext";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>

      {/* LOGO / IMAGEN DEL CARRITO */}
      <View style={[styles.heroContainer, { backgroundColor: theme.colors.card }]}>
        <Image
          source={require("../../assets/fondo.jpg")} // 🔁 REEMPLAZA con tu imagen del carrito
          style={styles.heroImage}
        />
        <View style={[styles.badge, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.badgeText}>5° A TI</Text>
        </View>
      </View>

      {/* TÍTULO */}
      <View style={styles.titleContainer}>
        <Text style={[styles.mainTitle, { color: theme.colors.primary }]}>Carrito</Text>
        <Text style={[styles.mainTitle, { color: theme.colors.primary }]}>Seguidor de Línea</Text>
        <Text style={[styles.teamName, { color: theme.colors.subtext }]}>Equipo: Pendiente</Text>
      </View>

      {/* DESCRIPCIÓN CORTA */}
      <View style={[styles.descCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        <Text style={[styles.descText, { color: theme.colors.subtext }]}>
          Prototipo de robot autónomo capaz de seguir una trayectoria
          marcada por una línea oscura sobre superficie clara,
          usando sensores infrarrojos y microcontrolador.
        </Text>
      </View>

      {/* ACCESOS RÁPIDOS */}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Secciones</Text>
      
      <View style={styles.grid}>
        {[
          { label: "Equipo", icon: "people-outline", screen: "Equipo" },
          { label: "Descripción", icon: "document-text-outline", screen: "Descripcion" },
          { label: "Componentes", icon: "construct-outline", screen: "Componentes" },
          { label: "Funcionamiento", icon: "settings-outline", screen: "Funcionamiento" },
          { label: "Galería", icon: "images-outline", screen: "Galeria" },
          { label: "Conclusiones", icon: "bulb-outline", screen: "Conclusiones" },
          { label: "Créditos", icon: "school-outline", screen: "Creditos" },
          { label: "Ajustes", icon: "settings-outline", screen: "Ajustes" }
        ].map((item) => (
          <TouchableOpacity
            key={item.screen}
            style={[styles.gridItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons 
              name={item.icon} 
              size={32} 
              color={theme.colors.primary} 
            />
            <Text style={[styles.gridLabel, { color: theme.colors.text }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heroContainer: {
    width: "100%",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 14,
    right: 14,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  titleContainer: {
    padding: 20,
    paddingBottom: 8,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
  },
  teamName: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: "500",
  },
  descCard: {
    marginHorizontal: 16,
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  descText: {
    fontSize: 14,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 10,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "47%",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 4,
  },
  gridIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});