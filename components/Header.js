import React from 'react';
import { Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const MyHeader = () => {
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.header}>
      <View style={styles.appbar}>
        <Ionicons name="stopwatch-outline" size={32} color="#fff" style={styles.icon} />
        <Text style={styles.title}>Stopwatch</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
  },
  appbar: {
    backgroundColor: 'transparent', // Make Appbar background transparent to show the gradient
    elevation: 0, // Remove shadow
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default MyHeader;
