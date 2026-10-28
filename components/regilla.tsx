import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Boton } from './Boton';

interface RegillaProps {
  onPressNumber: (num: string) => void;
  onPressOperator: (op: string) => void;
  onClear: () => void;
  onBackspace: () => void;
  onCalculate: () => void;
  onSquareRoot: () => void;
}

export const Regilla = ({
  onPressNumber,
  onPressOperator,
  onClear,
  onBackspace,
  onCalculate,
  onSquareRoot,
}: RegillaProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Boton label="√" onPress={onSquareRoot} color="#581c87" textColor="#e9d5ff" />
        <Boton label="^" onPress={() => onPressOperator('^')} color="#581c87" textColor="#e9d5ff" />
        <Boton label="C" onPress={onClear} color="#450a0a" textColor="#fca5a5" />
        <Boton label="⌫" onPress={onBackspace} color="#3b0764" textColor="#f3e8ff" />
      </View>
      <View style={styles.row}>
        <Boton label="7" onPress={() => onPressNumber('7')} color="#1e1b4b" />
        <Boton label="8" onPress={() => onPressNumber('8')} color="#1e1b4b" />
        <Boton label="9" onPress={() => onPressNumber('9')} color="#1e1b4b" />
        <Boton label="÷" onPress={() => onPressOperator('÷')} color="#6d28d9" textColor="#ffffff" />
      </View>
      <View style={styles.row}>
        <Boton label="4" onPress={() => onPressNumber('4')} color="#1e1b4b" />
        <Boton label="5" onPress={() => onPressNumber('5')} color="#1e1b4b" />
        <Boton label="6" onPress={() => onPressNumber('6')} color="#1e1b4b" />
        <Boton label="×" onPress={() => onPressOperator('×')} color="#6d28d9" textColor="#ffffff" />
      </View>
      <View style={styles.row}>
        <Boton label="1" onPress={() => onPressNumber('1')} color="#1e1b4b" />
        <Boton label="2" onPress={() => onPressNumber('2')} color="#1e1b4b" />
        <Boton label="3" onPress={() => onPressNumber('3')} color="#1e1b4b" />
        <Boton label="-" onPress={() => onPressOperator('-')} color="#6d28d9" textColor="#ffffff" />
      </View>
      <View style={styles.row}>
        <Boton label="0" onPress={() => onPressNumber('0')} color="#1e1b4b" />
        <Boton label="." onPress={() => onPressNumber('.')} color="#1e1b4b" />
        <Boton label="+" onPress={() => onPressOperator('+')} color="#6d28d9" textColor="#ffffff" />
        <Boton label="=" onPress={onCalculate} color="#9333ea" textColor="#ffffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});