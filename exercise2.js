import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const Biodata = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {/* Background bagian atas untuk Foto dan Nama */}
      <View style={styles.topBackground}>
        <View style={styles.profileBackground}>
          <Image 
            style={styles.profileImage} 
            source={require('./assets/Josh.jpg')}
          />
        </View>
        <Text style={styles.name}>Joshua Clyford Dadung</Text>
        <Text style={styles.aboutText}>Seorang mahasiswa yang berfokus pada bidang Sistem Informasi. Memiliki minat dalam berolahraga lebih khususnya Badminton.</Text>
      </View>

      {/* Scrollable InfoContainer */}
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Tempat Tanggal Lahir:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Kotamobagu, 26 April 2004</Text>
          </View>

          <Text style={styles.infoTitle}>Alamat:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Univ. Unklab (Cristal Dorm)</Text>
          </View>

          <Text style={styles.infoTitle}>Email:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>joshuadadung99@gmail.com</Text>
          </View>

          <Text style={styles.infoTitle}>Nomor Telepon:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>+62 813-5559-0797</Text>
          </View>

          <Text style={styles.infoTitle}>Status:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Mahasiswa</Text>
          </View>

          <Text style={styles.infoTitle}>Fakultas:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Ilmu Komputer</Text>
          </View>

          <Text style={styles.infoTitle}>Jurusan:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Sistem Informasi</Text>
          </View>

          <Text style={styles.infoTitle}>Gender:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Laki-laki</Text>
          </View>

          <Text style={styles.infoTitle}>Golongan Darah:</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>O</Text>
          </View>
        </View>
      </ScrollView>

      {/* Input Container dengan TextInput dan TouchableOpacity */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan sesuatu..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a8a',
  },
  topBackground: {
    backgroundColor: '#1e3a8a',
    padding: 20,
    alignItems: 'center',
  },
  profileBackground: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 70,
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  aboutText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1, // Memastikan semua isi dalam ScrollView bisa digulir
    paddingBottom: 80, // Memberikan ruang agar tidak tertutup oleh inputContainer
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row', // Membuat input dan tombol sejajar
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between', // Membuat jarak antara input dan tombol
    position: 'absolute', // Tetap berada di bawah layar
    bottom: 0,
    left: 0,
    right: 0,
  },
  textInput: {
    backgroundColor: '#f0f0f0',
    padding: 18,
    borderRadius: 8,
    fontSize: 14,
    color: '#555',
    flex: 1, // Menggunakan flex agar mengisi ruang kosong
    marginRight: 10, // Memberikan jarak dengan tombol
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Biodata;
