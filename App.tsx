import * as React from 'react';

import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import HotspotScreen from './components/HotspotScreen';
import WifiScreen from './components/WifiScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanDevicesScreen from './components/ScanDevicesScreen';
import PeripheralDetailsScreen from './components/PeripheralDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selected, setSelected] = React.useState<string | null>(null);

  if (selected === 'wifi') {
    return <WifiScreen back={() => setSelected(null)} />;
  }

  if (selected === 'hotspot') {
    return <HotspotScreen back={() => setSelected(null)} />;
  }

  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ScanDevices"
                    component={ScanDevicesScreen}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    padding: 14,
    backgroundColor: '#359962',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    position: 'absolute',
    top: 0,
  },
  headerImg: {
    width: 200,
    height: 200,
  },
});
