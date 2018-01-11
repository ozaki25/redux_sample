import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: '#f5f5f5',
  },
});

const HelloComponent = ({ message, onChange }) => (
  <View style={styles.main}>
    <Text style={styles.message}>{message}</Text>
    <TextInput
      onChangeText={onChange}
      placeholder="please input message"
      style={styles.textInput}
      autoFocus
    />
  </View>
);

HelloComponent.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default HelloComponent;
