import { Tabs } from 'expo-router';
import { View, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => <Ionicons name='flash-outline' />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Ionicons name='settings'/>,
        }}
      />
    </Tabs>
  );
}
export default TabsLayout;