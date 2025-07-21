import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconRow}>
        <Ionicons name="balloon-sharp" size={24} color="#4F8EF7" />
        <Text style={styles.label}>Ionicons</Text>
      </View>

      <View style={styles.iconRow}>
        <FontAwesome name="leaf" size={24} color="#f54242" />
        <Text style={styles.label}>FontAwesome</Text>
      </View>

      <View style={styles.iconRow}>
        <MaterialIcons name="cake" size={24} color="#f5427bff" />
        <Text style={styles.label}>MaterialIcons</Text>
      </View>

      <View style={styles.iconRow}>
        <Feather name="github" size={24} color="#f5a142" />
        <Text style={styles.label}>Feather</Text>
      </View>

      <View style={styles.iconRow}>
        <Entypo name="cloud" size={24} color="#42f554" />
        <Text style={styles.label}>Entypo</Text>
      </View>

      <View style={styles.iconRow}>
        <AntDesign name="gift" size={24} color="#f5429e" />
        <Text style={styles.label}>AntDesign</Text>
      </View>

      <View style={styles.iconRow}>
        <EvilIcons name="image" size={24} color="#8a42f5" />
        <Text style={styles.label}>EvilIcons</Text>
      </View>

      <View style={styles.iconRow}>
        <Foundation name="laptop" size={24} color="#f5e642" />
        <Text style={styles.label}>Foundation</Text>
      </View>

      <View style={styles.iconRow}>
        <MaterialCommunityIcons name="airballoon" size={24} color="#42f5d7" />
        <Text style={styles.label}>MaterialCommunity</Text>
      </View>

      <View style={styles.iconRow}>
        <Octicons name="feed-heart" size={24} color="#d742f5ff" />
        <Text style={styles.label}>Octicons</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default IconScreen;
