import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Platform, StatusBar } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <View style={styles.center}><ActivityIndicator size="large" color="#3B82F6" /></View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.titulo}>Lista de Usuarios (API)</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9', paddingTop: 60, paddingHorizontal: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F5F9' },
  titulo: { fontSize: 24, fontWeight: '800', marginBottom: 20, textAlign: 'center', color: '#1E293B' },
  item: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 12, marginBottom: 12, elevation: 2 },
  nombre: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  email: { fontSize: 14, color: '#64748B', marginTop: 4 }
});

