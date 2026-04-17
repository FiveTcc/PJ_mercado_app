import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddItemScreen({ navigation, route }) {
  const [nome, setNome] = useState("");

  const adicionar = () => {
    if (!nome.trim()) return;

    const novoItem = {
      id: Date.now().toString(),
      nome,
      comprado: false
    };

    route.params?.onAddItem(novoItem);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Item</Text>

      <TextInput
        placeholder="Digite o nome do item"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={adicionar}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  botao: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8
  },
  botaoTexto: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  }
});