import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' , headerShown: false }}>
    
     <Tabs.Screen
        name="foryou"
        options={{
          title: 'For You',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="lightbulb-o" size={28} color={color} />
          ),
        }}
    />
    <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="compass" size={28} color={color} />
          ),
        }}
    />   
    <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
    />
    </Tabs>
  );
}
