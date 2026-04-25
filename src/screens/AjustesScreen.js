import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function AjustesScreen() {
  const { darkMode, toggleTheme, theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState([false, false, false, false]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Ajustes</Text>

      <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        {["Notificaciones", "Privacidad", "Idioma", "Cuenta"].map((opt, i) => (
          <View key={i}>
            <TouchableOpacity onPress={() => { const newExpanded = [...expanded]; newExpanded[i] = !newExpanded[i]; setExpanded(newExpanded); }}>
              <View style={styles.optionRow}>
                <Text style={[styles.option, { color: theme.colors.text }]}>{opt}</Text>
                <Text style={{ color: theme.colors.subtext }}>{expanded[i] ? "▼" : "›"}</Text>
              </View>
              {expanded[i] && (
                <View style={styles.expandedContent}>
                  <Text style={[styles.expandedText, { color: theme.colors.subtext }]}>Opciones para {opt}</Text>
                </View>
              )}
            </TouchableOpacity>
            {i < 3 && <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Cambiar a {darkMode ? "modo claro" : "modo oscuro"}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.tema, { color: theme.colors.subtext }]}>
        Tema actual: {darkMode ? "Oscuro" : "Claro"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 20,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
    overflow: "hidden",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  option: {
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
  },
  button: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  tema: {
    fontSize: 14,
    textAlign: "center",
  },
  expandedContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  expandedText: {
    fontSize: 14,
  },
});