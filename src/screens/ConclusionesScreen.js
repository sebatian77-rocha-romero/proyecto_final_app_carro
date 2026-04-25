import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Ionicons } from "@expo/vector-icons";

const secciones = [
  {
    icono: "school-outline", 
    titulo: "¿Qué aprendimos?",
    contenido: "se obtuvo los conocimientos para cablear motores basicos, el funcionamiento de puente h, mejor comprension del codigo de arfuino y el uso de arrays, estructuras y listas para ahorrar lineas de codigo y evitar redundancia.",
  },
  {
    icono: "warning-outline", 
    titulo: "Dificultades presentadas",
    contenido: "Se tuvo dificultades con el codigo, por falta de funciones para ciertos casos, ploblemas con el cableado o calibrecion de los sensores para detectar la linea, o faltas de algunas partes.",
  },
  {
    icono: "rocket-outline", 
    titulo: "Mejoras futuras",
    contenido: "Algunas mejoras futuras que se podrian implementar serian aumentar la potencia de los motores con una pila mas potente, inteegrarles mas partes para resolver ploblemas mas frecuentes como cuando alguna de las ruedas se atora",
  },
];

export default function ConclusionesScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Conclusiones</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>
        Reflexiones finales del equipo
      </Text>

      {secciones.map((sec, i) => (
        <View
          key={i}
          style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
        >
          <Ionicons 
            name={sec.icono} 
            size={30} 
            color={theme.colors.primary} 
            style={styles.icono}
          />
          <Text style={[styles.cardTitle, { color: theme.colors.primary }]}>{sec.titulo}</Text>
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
    fontSize: 14,
    marginBottom: 18,
    marginTop: 4,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
  },
  icono: {
    fontSize: 30,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    lineHeight: 22,
  },
});