import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Library from '../library';
import Liked from '../liked';
import Suggested from '../suggested';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: 'blue' },
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Suggested" component={Suggested} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
});
