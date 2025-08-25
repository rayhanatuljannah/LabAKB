import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { MAHASISWA } from "../mahasiswa-list";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MahasiswaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Cari mahasiswa berdasarkan NIM
  const mhs = MAHASISWA.find((m) => m.nim === id);

  if (!mhs) {
    return (
      <View style={styles.center}>
        <Text>Error</Text>
        <Text>Mahasiswa dengan NIM ini tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: mhs.foto }} style={styles.foto} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Ionicons name="person-outline" size={20} />
          <Text style={styles.value}>{mhs.nama}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="card-outline" size={20} />
          <Text style={styles.value}>{mhs.nim}</Text>
        </View>
      </View>

      <Text style={styles.back} onPress={() => router.back()}>
        ← Kembali
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  foto: { width: 180, height: 180, borderRadius: 90, marginTop: 12, marginBottom: 20 },
  info: { width: "100%", gap: 12 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  value: { fontSize: 18, fontWeight: "600" },
  back: { marginTop: 24, textDecorationLine: "underline", fontSize: 16 },
});
