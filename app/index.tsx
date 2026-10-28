import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Display } from '../components/display';
import { Regilla } from '../components/regilla';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const { display, history, handleNumber, handleOperator, clear, backspace, calculate, squareRoot } = useCalculator();

  return (
    <View style={styles.container}>
      <Display value={display} history={history} />
      <Regilla
        onPressNumber={handleNumber}
        onPressOperator={handleOperator}
        onClear={clear}
        onBackspace={backspace}
        onCalculate={calculate}
        onSquareRoot={squareRoot}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-end',
    padding: 20,
  },
});