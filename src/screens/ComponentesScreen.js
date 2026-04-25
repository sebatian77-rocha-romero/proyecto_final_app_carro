import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Ionicons } from "@expo/vector-icons";

const componentes = [
  {
      nombre: "Chasis",
      funcion: "Estructura base que sostiene todos los componentes del carrito echa de acrilico.",
      icono: "cube-outline",
      imagen: null,
    },
    {
      nombre: "2 Motores DC",
      funcion: "Generan el movimiento de las ruedas. Giran en ambas direcciones para controlar la trayectoria.",
      icono: "flash-outline",
      imagen: null,
    },
    {
      nombre: "Sensor de liena TCRT5000",
      funcion: "Detecta el contraste entre la línea oscura y la superficie clara para seguir el recorrido.",
      icono: "eye-outline",
      imagen: null,
    },
    {
      nombre: "2 Ruedas",
      funcion: "Permiten el desplazamiento del carrito sobre la superficie.",
      icono: "ellipse-outline",
      imagen: null,
    },
    {
      nombre: "Batería de 9V",
      funcion: "Fuente de energía del sistema. Alimenta motores y circuitos.",
      icono: "battery-charging-outline",
      imagen: null,
    },
    {
      nombre: "Microcontrolador NodeMCU ESP32",
      funcion: "Cerebro del sistema. programado con las intrucciones y funciones paraa que el carro funcione",
      icono: "hardware-chip-outline",
      imagen: null,
    },
    {
      nombre: "Cables",
      funcion: "el cableado esta hecho mayormente por jumpers macho hempra y algunos puenteados",
      icono: "git-branch-outline",
      imagen: null,
      
    },
    {
      nombre: "Puente H L298n Driver",
      funcion: "controlador del voltajee de los motores, funciona en conjuento al esp32",
      icono: "shuffle-outline",
      imagen: null,
    },
    {
      nombre: "protoboard mini",
      funcion: "placa para ensamblar los circuitos e insertar los componentes y los cables, funciona en conjuento al esp32",
      icono: "grid-outline",
      imagen: null,
    },
    {
      nombre: "power bank",
      funcion: "dispositivo compacto recargable que almacena energía eléctrica para dar energia al esp32, junto aun cable usb normal",
      icono: "power-outline",
      imagen: null,
    },
    {
      nombre: "1 led rojo",
      funcion: "led conectado al protoboard que detecta la activacion del sensor de enmedio",
      icono: "bulb-outline",
      imagen: null,
    },
];

export default function ComponentesScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Componentes</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>
        Materiales y partes utilizadas
      </Text>

      <FlatList
        data={componentes}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item, index }) => (
          <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <View style={[styles.iconBox, { backgroundColor: theme.colors.primary + "22" }]}>
              {item.imagen ? (
                <Image source={item.imagen} style={styles.componentImage} />
              ) : (
                <Ionicons 
                  name={item.icono} 
                  size={28} 
                  color={theme.colors.primary} 
                />
              )}
            </View>
            <View style={styles.info}>
              <View style={styles.headerRow}>
                <Text style={[styles.nombre, { color: theme.colors.text }]}>{item.nombre}</Text>
                <View style={[styles.numBadge, { backgroundColor: theme.colors.primary }]}>
                  <Text style={styles.numText}>{index + 1}</Text>
                </View>
              </View>
              <Text style={[styles.funcion, { color: theme.colors.subtext }]}>{item.funcion}</Text>
            </View>
          </View>
        )}
      />
    </View>
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
    flexDirection: "row",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    gap: 12,
    alignItems: "center",
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  componentImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
    resizeMode: "contain",
  },
  icono: { fontSize: 26 },
  info: { flex: 1 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "700",
  },
  funcion: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 4,
  },
  numBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  numText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
});