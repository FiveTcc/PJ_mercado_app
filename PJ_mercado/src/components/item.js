import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Item = ({ item, onToggle, onRemove }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.itemContent}>
        <Text style={[styles.itemName, item.comprado && styles.comprado]}>{item.nome}</Text>
        <Text style={styles.status}>{item.comprado ? 'Comprado' : 'Não comprado'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.removeButton}>
        <Text style={styles.removeText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
  },
  comprado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeText: {
    color: 'white',
  },
});

export default Item;
