import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [itens, setItens] = useState([]);

  const removerItem = (id) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const toggleComprado = (id) => {
    setItens(itens.map(item =>
      item.id === id
        ? { ...item, comprado: !item.comprado }
        : item
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => toggleComprado(item.id)}>
        <Text style={[
          styles.texto,
          item.comprado && styles.comprado
        ]}>
          {item.nome}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removerItem(item.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista</Text>

      {/* 🔥 BOTÃO QUE VOCÊ PERGUNTOU */}
      <TouchableOpacity
        style={styles.botaoAdd}
        onPress={() =>
          navigation.navigate("AddItem", {
            onAddItem: (item) =>
              setItens(prev => [...prev, item])
          })
        }
      >
        <Text style={styles.botaoTexto}>➕ Novo Item</Text>
      </TouchableOpacity>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  botaoAdd: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },

  botaoTexto: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1
  },

  texto: {
    fontSize: 18
  },

  comprado: {
    textDecorationLine: "line-through",
    color: "gray"
  },

  remover: {
    fontSize: 18
  }
});