import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const HelloComponent = ({ message, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
  >
    <Text>{message}</Text>
  </TouchableOpacity>
);

HelloComponent.propTypes = {
  message: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default HelloComponent;
