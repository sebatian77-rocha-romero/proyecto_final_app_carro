import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function CreditosScreen() {
  const { theme } = useContext(ThemeContext);

  const info = [
    { label: "Grupo", valor: "5° A TI" },
    { label: "Materia", valor: "[ DESARROLLO DE APLICACIONES MOVILES]" },        // 🔁 REEMPLAZA
    { label: "Docente", valor: "Ing. Ana Laura Lara Chairez" },
    { label: "Cuatrimestre", valor: "5" },
    { label: "Fecha de entrega", valor: "Viernes 24 de Abril" },
    { label: "Institución", valor: "Universidad Tecnológica de Durango (UTD)" },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      {/* CABECERA */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.headerEmoji}></Text>
        <Text style={styles.headerTitle}>Créditos</Text>
        <Text style={styles.headerSub}>Carrito Seguidor de Línea</Text>
      </View>

      {/* FICHA */}
      <View style={[styles.fichaCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        {info.map((item, i) => (
          <View key={i}>
            <View style={styles.row}>
              <Text style={[styles.label, { color: theme.colors.subtext }]}>{item.label}</Text>
              <Text style={[styles.valor, { color: theme.colors.text }]}>{item.valor}</Text>
            </View>
            {i < info.length - 1 && (
              <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />
            )}
          </View>
        ))}
      </View>

      {/* INTEGRANTES */}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Integrantes del equipo</Text>
      <View style={[styles.fichaCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        {["ROCHA ROMERO JESUS SEBASTIAN", "Santillan Fuentes Jesús Emilio"].map((nombre, i) => (
          <View key={i}>
            <View style={styles.row}>
              <Text style={[styles.valor, { color: theme.colors.text }]}>{nombre}</Text>
            </View>
            {i < 2 && <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />}
          </View>
        ))}
      </View>

      <Text style={[styles.footer, { color: theme.colors.subtext }]}>
        Desarrollado con React Native + Expo
      </Text>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 36,
    alignItems: "center",
  },
  headerEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  headerSub: {
    fontSize: 15,
    color: "#ffffffcc",
    marginTop: 4,
  },
  fichaCard: {
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  valor: {
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
    textAlign: "right",
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 0,
  },
  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 16,
    marginBottom: 8,
  },
});