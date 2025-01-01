import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { LinearGradient } from 'expo-linear-gradient';
import Result from './Result';
import Control from './Control';
import { displayTime } from './Util';
import MyHeader from './Header';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      console.log('Timer cleared:', timer.current);
    }
  };

  const handleLeftButtonPress = useCallback(() => {
    console.log('Left button pressed. isRunning:', isRunning);
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]); // Lap
      console.log('Lap recorded:', time);
    } else {
      clearTimer(); // Clear the timer on Reset
      setResults([]); // Reset
      setTime(0);
      console.log('Timer reset.');
    }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
    console.log('Right button pressed. isRunning:', isRunning);
    if (!isRunning) {
      console.log('Starting interval');
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
      console.log('Timer started:', timer.current);
    } else {
      console.log('Stopping interval:', timer.current);
      clearTimer(); // Clear the timer on Stop
      console.log('Timer stopped:', timer.current);
    }
    setRunning((previousState) => !previousState); // Toggle isRunning state
  }, [isRunning]);

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <MyHeader />
      <StatusBar style='light' />
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>
      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>
      <View style={styles.result}>
        <Result results={results} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    color: '#fff',
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: { flex: 2 / 5 },
});
