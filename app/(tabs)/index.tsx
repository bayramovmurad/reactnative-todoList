import useTheme from "@/hooks/useTheme";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text>salam</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // ortada
    alignItems: "center",
  },
  title: {
    color: "red",
    fontSize: 20, // burada olmalıdır
    textAlign: "center",
    fontWeight: 700,
  },
});
