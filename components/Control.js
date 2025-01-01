import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? '#333333' : '#1c1c1e', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
        ]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? '#fff' : '#9d9ca2', fontSize: 18 }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#e74c3c" : '#2ecc71', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: '#fff', fontSize: 18 }}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default React.memo(Control);
