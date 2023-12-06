import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    // navigation.push('Login')
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.mainCon}>
      <StatusBar
        // barStyle={darkMode ? 'light-content' : 'dark-content'}
        barStyle={'light-content'}
        hidden={true}
      />
      <View style={styles.textCon}>
        <Text style={styles.spText}>Splash</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCon: { flex: 1, backgroundColor: Colors.bgGray, paddingVertical: 20 },
  textCon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  spText: {
    fontSize: 54,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default Startup;
