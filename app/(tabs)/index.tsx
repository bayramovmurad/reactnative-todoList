import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation } from "convex/react";
import { Text, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import Header from "@/components/Header";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  
  const addTodo = useMutation(api.todos.addTodo);

  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={homeStyles.safeArea}>
       <Header/>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>toggle the mode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addTodo({ text: "im done" })}>
          <Text>Add new todo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

