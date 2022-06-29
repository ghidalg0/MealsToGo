import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1}}>
        <View style={{ padding: 16, backgroundColor: '#8ECAE5'}}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#FC8500'}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({

});
