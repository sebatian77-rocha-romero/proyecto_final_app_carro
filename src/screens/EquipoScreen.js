import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const integrantes = [
  {
    nombre: "Rocha Romero Jesus Sebastian",  
    rol: "ensamblador del carro",
    avatar: require("../../assets/s.jpeg"),
  },
  {
    nombre: "Santillan Fuentes Jesús Emilio",
    rol: "creador del codigo",
    avatar: require("../../assets/em.jpeg"),
  },
];

export default function EquipoScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Equipo de Trabajo</Text>
      <Text style={[styles.teamLabel, { color: theme.colors.primary }]}>Pendiente</Text>

      {integrantes.map((item, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
        >
          <View style={[styles.avatarContainer, { backgroundColor: theme.colors.primary + "22" }]}>
            {item.avatar ? (
              <Image source={item.avatar} style={styles.avatarImage} />
            ) : (
              <Text style={styles.avatarEmoji}></Text>
            )}
          </View>
          <View style={styles.info}>
            <Text style={[styles.nombre, { color: theme.colors.text }]}>{item.nombre}</Text>
            <Text style={[styles.rol, { color: theme.colors.subtext }]}>{item.rol}</Text>
          </View>
          <View style={[styles.numBadge, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.numText}>{index + 1}</Text>
          </View>
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
    marginBottom: 4,
  },
  teamLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 24,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
    gap: 14,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  info: { flex: 1 },
  nombre: {
    fontSize: 17,
    fontWeight: "700",
  },
  rol: {
    fontSize: 13,
    marginTop: 3,
  },
  numBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  numText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  Image: {

  }
});