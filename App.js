import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.center}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mantenimientoCard}>
        <Text style={styles.alerta}>⚠️ Aplicación en Mantenimiento</Text>
        <Text style={styles.subtexto}>Estamos mejorando nuestra plataforma. Volveremos pronto.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F1F5F9',
    padding: 20
  },
  mantenimientoCard: {
    backgroundColor: '#FEF2F2',
    padding: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
    alignItems: 'center',
    width: '100%'
  },
  alerta: { 
    fontSize: 22, 
    fontWeight: '800', 
    color: '#991B1B', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  subtexto: { 
    fontSize: 16, 
    color: '#7F1D1D', 
    textAlign: 'center',
    lineHeight: 22
  }
});