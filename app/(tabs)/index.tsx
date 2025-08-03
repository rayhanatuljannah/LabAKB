import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/images/Unismuh-Makassar.jpeg')} style={styles.image} />
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar disingkat Unismuh Makassar adalah universitas berbasis Islam yang terletak di Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan, Indonesia. Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta terkemuka di kawasan Indonesia Timur. Didirikan oleh Persyarikatan Muhammadiyah, kampus ini menjunjung tinggi nilai-nilai Islam dan keilmuan dalam penyelenggaraan pendidikan. Unismuh menawarkan berbagai program studi dari jenjang diploma, sarjana, hingga pascasarjana melalui beberapa fakultas yang unggul dan terakreditasi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
