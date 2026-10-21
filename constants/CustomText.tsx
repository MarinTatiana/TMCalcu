import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

interface CustomTextProps extends TextProps {
  variant?: 'big' | 'small';
}

export default function CustomText({ variant = 'big', style, children, ...rest }: CustomTextProps) {
  return (
    <Text 
      style={[
        variant === 'big' ? styles.bigText : styles.smallText,
        style
      ]} 
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  bigText: {
    color: Colors.textPrimary,
    fontSize: 70,
  },
  smallText: {
    color: Colors.textSecondary,
    fontSize: 40,
  },
});