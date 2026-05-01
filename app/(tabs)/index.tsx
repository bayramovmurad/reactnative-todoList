import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const getTodos = useQuery(api.todos.getTodos);
  console.log(getTodos);
  
  const addTodo = useMutation(api.todos.addTodo);

  return (
    <View style={styles.container}>
      <Text>salam</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({text:"im done"})}>
        <Text>Add new todo</Text>
      </TouchableOpacity>
      <FlatList 
      data={getTodos}
      renderItem={(item) => <Text>{}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  title: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 700,
  },
});
