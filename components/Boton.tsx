import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface BotonProps {
  label: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
}

export const Boton = ({ label, onPress, color = '#2e1065', textColor = '#f3e8ff' }: BotonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4c1d95',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
  },
});