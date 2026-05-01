import { Tabs } from 'expo-router';
import { View, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import useTheme from '@/hooks/useTheme';

const TabsLayout = () => {

  const {colors} =useTheme();

  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:colors.primary,
        tabBarStyle:{
            backgroundColor:colors.surface,
            paddingTop:5,
            borderTopWidth:1,
            borderTopColor:colors.border
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:600
        },
        headerShown:false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => <Ionicons name='flash-outline' size={size} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Ionicons name='settings' size={size} color={color}/>,
        }}
      />
    </Tabs>
  );
}
export default TabsLayout;