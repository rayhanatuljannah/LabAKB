// app/index.tsx
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MAHASISWA } from "./mahasiswa-list";  // <- naik 1 folder

export default function MahasiswaListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MAHASISWA}
        keyExtractor={(item) => item.nim}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/mahasiswa/[id]", params: { id: item.nim } }}
            asChild
          >
            <TouchableOpacity style={styles.row}>
              <Ionicons name="person-circle-outline" size={24} />
              <Text style={styles.nama}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  row: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14, gap: 12 },
  nama: { fontSize: 16 },
  separator: { height: 1, backgroundColor: "#eee", marginLeft: 52 },
});
