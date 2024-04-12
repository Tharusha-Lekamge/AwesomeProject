import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Peripheral } from 'react-native-ble-manager';

// TODO: Implement CustomIcon with styling
// TODO: Fix the type of the device parameter
const CustomIcon = (device: any, index: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.boundingBox}>
        <Text style={styles.iconText}>Device {index} - {device.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  boundingBox: {
    width: 50,
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomIcon;
