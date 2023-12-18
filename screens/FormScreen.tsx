import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');

  const handleNameChange = text => {
    setName(text);
  };

  const handleHobbyChange = text => {
    setHobby(text);
  };

  const handleSubmit = () => {
    // Handle form submission here
    alert(`Name: ${name}, Hobby: ${hobby}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form Screen</Text>
      <View style={styles.form}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={handleNameChange}
          value={name}
        />
        <Text>Hobby:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your hobby"
          onChangeText={handleHobbyChange}
          value={hobby}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});

export default FormScreen;
