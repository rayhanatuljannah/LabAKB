import { ScrollView, StyleSheet, Text } from "react-native";

// 10 nama sesuai permintaan kamu
const namesWithStambuk = [
  // 5 sebelum Ray (font statis)
  "Sa'ban - 105841110322",
  "Nur Fadillah Sari - 105841110422",
  "Wa Nanda Sulystian - 105841110622",
  "Muh Tegar Al Fikri - 105841110722",
  "Rayhanatul Jannah - 105841110822",

  // Ray (kamu) + 4 sesudah (font variabel)
  "Hanna Maryam - 105841110922",
  "Afifah Auliyah - 105841111022",
  "Muh Fikri Maulana - 105841107622",
  "Muhammad Hasraddin Hasnan - 105841107722",
  "Muhammad Dzulfikar Hidayat - 105841107822"
];

// Font untuk 5 statis dan 5 variabel
const staticFonts = [
  "Combo",
  "Estonia",
  "IngridDarling",
  "JacquesFrancoisShadow",
  "SyneTactile",
];

const variableFonts = [
  "Bitcount",       // Ray
  "Manrope",
  "Quicksand",
  "SmoochSans",
  "JosefinSlab",
];

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>5 nama sebelum (font statis):</Text>
      {namesWithStambuk.slice(0, 5).map((item, idx) => (
        <Text
          key={idx}
          style={[styles.name, { fontFamily: staticFonts[idx] }]}
        >
          {item}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>5 nama setelah (font variabel):</Text>
      {namesWithStambuk.slice(5).map((item, idx) => (
        <Text
          key={idx + 5}
          style={[
            styles.name,
            { fontFamily: variableFonts[idx] },
            item.includes("Ray") && styles.highlight,
          ]}
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    marginVertical: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  highlight: {
    fontWeight: "bold",
    color: "#1976D2", // Sorot warna biru untuk nama kamu (Ray)
  },
});
