import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Edit app/index.tsx to edit this screen.
        {"\n"}salam yer uz
      </Text>
      <Text>
        salam
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",   // ortada
    alignItems: "center"
  },
  title: {
    color: "red",
    fontSize: 20,               // burada olmalıdır
    textAlign: "center",
    fontWeight: 700
  }
});