import { ScrollView, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.paragraph}>
        Aplikasi ini dibuat untuk keperluan tugas mata kuliah. Terdiri dari tiga halaman utama:
      </Text>
      <Text style={styles.list}>• Home: Menampilkan informasi tentang Unismuh Makassar.</Text>
      <Text style={styles.list}>• About: Menjelaskan tujuan dan struktur aplikasi.</Text>
      <Text style={styles.list}>• Profil: Menampilkan data diri mahasiswa.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'justify',
  },
  list: {
    fontSize: 16,
    marginBottom: 8,
  },
});
