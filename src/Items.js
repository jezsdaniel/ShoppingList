import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './actions';

const Items = ({items, dispatchAddItem, dispatchDeleteItem}) => {
  const [itemContent, setItemContent] = useState({name: '', price: ''});

  const updateInput = (key, value) => {
    setItemContent({
      ...itemContent,
      [key]: value,
    });
  };

  const addItem = () => {
    dispatchAddItem(itemContent);
    setItemContent({name: '', price: ''});
  };

  const deleteItem = item => {
    dispatchDeleteItem(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.itemsContainer}>
        {items.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text onPress={() => deleteItem(item)}>Delete</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={itemContent.name}
            onChangeText={value => updateInput('name', value)}
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            value={itemContent.price}
            onChangeText={value => updateInput('price', value)}
            style={styles.input}
            placeholder="Price"
          />
        </View>
        <TouchableOpacity onPress={addItem}>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    padding: 20,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 14,
    color: '#999',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28,
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

const mapStateToProps = state => ({
  items: state.itemReducer.items,
});

const mapDispatchToProps = {
  dispatchAddItem: item => addItem(item),
  dispatchDeleteItem: item => deleteItem(item),
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
