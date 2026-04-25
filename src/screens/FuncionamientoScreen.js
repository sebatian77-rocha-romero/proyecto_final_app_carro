import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const pasos = [
  {
    paso: "01",
    titulo: "Detección de la línea",
    detalle: "Tres sensores infrarrojos (GPIO 4, 15, 14) leen el contraste del piso. Devuelven 0 sobre línea oscura y 1 sobre superficie clara. La lectura ocurre en cada ciclo del loop().",
  },
  {
    paso: "02",
    titulo: "Procesamiento de señal",
    detalle: "El ESP32 evalúa la combinación de los tres sensores (izq, der, md) mediante condiciones if/else. Cada combinación posible dispara una acción de movimiento distinta.",
  },
  {
    paso: "03",
    titulo: "Control de motores",
    detalle: "Según la lectura, el L298N recibe señales en IN1–IN4 y PWM en ENA/ENB. Velocidad base: 110. Velocidad de curva: 102. La diferencia de velocidad entre ruedas genera el giro.",
  },
  {
    paso: "04",
    titulo: "Recuperación de línea perdida",
    detalle: "Si los tres sensores leen 0, el carrito gira en su lugar buscando la línea. Si el sensor central detecta 1, se reanuda el avance. Un contador de 500 iteraciones evita bucles infinitos.",
  },
  {
    paso: "05",
    titulo: "Registro y ciclo continuo",
    detalle: "Cada acción se guarda en una lista enlazada (máx. 50 nodos) con timestamp, nombre de acción y lecturas. Cada 10 segundos se imprime el historial por Serial. El loop() se repite indefinidamente.",
  },
];

export default function FuncionamientoScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Funcionamiento</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>
        Lógica y flujo del sistema
      </Text>

      {/* Imagen del diagrama / esquema */}
      <View style={[styles.diagramBox, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        <Text style={[styles.diagramPlaceholder, { color: theme.colors.subtext }]}>
          <Image source={require("../../assets/diagrama.png")} style={styles.diagramImage}></Image>
        </Text>
      </View>

      {/* PASOS */}
      <Text style={[styles.stepsTitle, { color: theme.colors.text }]}>Etapas del proceso</Text>

      {pasos.map((item, i) => (
        <View key={i} style={styles.stepRow}>
          {/* Línea vertical */}
          <View style={styles.timelineCol}>
            <View style={[styles.stepCircle, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.stepNum}>{item.paso}</Text>
            </View>
            {i < pasos.length - 1 && (
              <View style={[styles.stepLine, { backgroundColor: theme.colors.border }]} />
            )}
          </View>

          {/* Contenido */}
          <View style={[styles.stepCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>{item.titulo}</Text>
            <Text style={[styles.stepDetail, { color: theme.colors.subtext }]}>{item.detalle}</Text>
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
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 16,
    marginTop: 4,
  },
  diagramBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 150,
  },
  diagramPlaceholder: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 24,
  },
  diagramImage: {
    width: 490,
    height: 570,
    resizeMode: "contain",
    borderRadius: 10,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  stepRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 0,
  },
  timelineCol: {
    alignItems: "center",
    width: 44,
  },
  stepCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  stepNum: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
  },
  stepLine: {
    width: 2,
    flex: 1,
    minHeight: 20,
    marginVertical: 4,
  },
  stepCard: {
    flex: 1,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  stepDetail: {
    fontSize: 13,
    lineHeight: 20,
  },
});