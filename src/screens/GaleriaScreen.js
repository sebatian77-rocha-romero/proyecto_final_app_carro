import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const { width } = Dimensions.get("window");
const IMG_SIZE = (width - 48) / 2;

const fotos = [
  { id: "1", image: require("../../assets/car1.jpg"), caption: "Foto del carrito terminado" },
  { id: "2", image: require("../../assets/car2.jpg"), caption: "carrtio en la competencia" },
  { id: "3", image: require("../../assets/car3.jpg"), caption: "carrito retornando a la linea" },
  { id: "4", image: require("../../assets/car4.jpg")},
  { id: "5", image: require("../../assets/car5.jpg")},
  { id: "6", image: require("../../assets/car6.jpg")},
  { id: "7", image: require("../../assets/car7.jpg")},
  { id: "8", image: require("../../assets/car8.jpg")},
];

export default function GaleriaScreen() {
  const { theme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(null);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.pageTitle, { color: theme.colors.text }]}>Galería</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>
        Evidencias y fotografías del proyecto
      </Text>

      <FlatList
        data={fotos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => item.image && setSelected(item)}
            style={[styles.photoCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
          >
            <Image source={item.image} style={styles.photo} />
            <Text style={[styles.caption, { color: theme.colors.subtext }]} numberOfLines={2}>
              {item.caption}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!selected} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSelected(null)}
        >
          {selected && (
            <Image
              source={selected.image}
              style={styles.modalImage}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </Modal>
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
  photoCard: {
    width: IMG_SIZE,
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: IMG_SIZE,
  },
  photoPlaceholder: {
    width: "100%",
    height: IMG_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderIcon: {
    fontSize: 40,
  },
  caption: {
    fontSize: 12,
    padding: 8,
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#000000ee",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: width - 32,
    height: width - 32,
  },
});