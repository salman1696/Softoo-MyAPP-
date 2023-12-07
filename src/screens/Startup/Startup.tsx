import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { setDefaultTheme } from "../../store/theme";
import { ApplicationScreenProps } from "../../../@types/navigation";
import { Colors } from "../../../src/theme/Variables";

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
    setDefaultTheme({ theme: "default", darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.mainCon}>
      <StatusBar barStyle={"light-content"} hidden={true} />
      <View style={styles.textCon}>
        <Text style={styles.spText}>Splash</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCon: { flex: 1, backgroundColor: Colors.bgGray, paddingVertical: 20 },
  textCon: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  spText: {
    fontSize: 54,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.primary,
  },
});

export default Startup;
