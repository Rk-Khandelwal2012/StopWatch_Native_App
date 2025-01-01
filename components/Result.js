import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { displayTime } from './Util';

// Here we print lap time

function Result({ results }) {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}
          </Text>
          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  resultItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default React.memo(Result);
