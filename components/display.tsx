import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  value: string;
  history: string;
}

export const Display = ({ value, history }: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.historyText} numberOfLines={1}>
        {history}
      </Text>
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#130f1d',
    borderRadius: 24,
    marginBottom: 20,
    minHeight: 130,
    width: '100%',
    borderWidth: 2,
    borderColor: '#7c3aed',
    shadowColor: '#a78bfa',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  historyText: {
    color: '#a78bfa',
    fontSize: 20,
    marginBottom: 6,
    fontWeight: '400',
  },
  text: {
    color: '#f3e8ff',
    fontSize: 48,
    fontWeight: '300',
  },
});