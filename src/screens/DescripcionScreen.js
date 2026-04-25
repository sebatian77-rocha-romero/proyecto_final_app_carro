import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Ionicons } from "@expo/vector-icons";


const secciones = [
  {
    icono: "hardware-chip-outline", 
    titulo: "¿Qué es el carrito seguidor de línea?",
    contenido: "Es un robot autónomo construido sobre un chasis de dos ruedas, equipado con sensores infrarrojos y controlado por un ESP32. Sigue de forma automática una trayectoria marcada por una línea oscura sobre una superficie clara, sin intervención humana.",
  },
  {
    icono: "locate-outline", 
    titulo: "¿Qué problema resuelve?",
    contenido: "Demuestra cómo un sistema embebido puede tomar decisiones en tiempo real a partir de sensores. Sirve como base para aplicaciones de automatización industrial, transporte guiado en almacenes y robótica educativa.",
  },
  {
    icono: "flag-outline", 
    titulo: "Objetivo general",
    contenido: "Diseñar e implementar un robot móvil capaz de detectar y seguir una línea trazada en el suelo, aplicando estructuras de datos (structs, arreglos y listas enlazadas) para gestionar la configuración del hardware y el historial de acciones del sistema.",
  },
  {
    icono: "settings-outline",
    titulo: "Funcionamiento general",
    contenido: "Los sensores infrarrojos leen el contraste del piso cada ciclo. El ESP32 interpreta esas lecturas y envía señales al módulo L298N, que ajusta la velocidad y dirección de los motores DC. Si pierde la línea, el carrito gira hasta recuperarla o detiene la búsqueda tras 500 intentos.",
  },
];

export default function DescripcionScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Descripción del Proyecto</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>Carrito Seguidor de Línea</Text>

      {secciones.map((sec, i) => (
        <View
          key={i}
          style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
        >
          <View style={styles.cardHeader}>
            <Ionicons 
              name={sec.icono} 
              size={26} 
              color={theme.colors.primary} 
            />
            <Text style={[styles.cardTitle, { color: theme.colors.primary }]}>{sec.titulo}</Text>
          </View>
          <Text style={[styles.cardContent, { color: theme.colors.subtext }]}>{sec.contenido}</Text>
        </View>
      ))}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  pageTitle: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    marginTop: 4,
  },
  card: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  icono: { fontSize: 24 },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  cardContent: {
    fontSize: 14,
    lineHeight: 22,
  },
});