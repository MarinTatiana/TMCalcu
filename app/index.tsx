import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CalculatorScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.smallText} numberOfLines={1} adjustsFontSizeToFit>
          68446 + 181151
        </Text>
        <Text style={styles.bigText} numberOfLines={1} adjustsFontSizeToFit>
          249 597
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>CE</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>DEL</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>X</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>/</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>-</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>+</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.doubleButton]}><Text style={styles.btnText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>=</Text></TouchableOpacity>
        </View>
      </View>
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
  displayContainer: {
    paddingBottom: 20,
    alignItems: 'flex-end',
  },
  smallText: {
    color: '#888',
    fontSize: 24,
  },
  bigText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    height: 70,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 35,
  },
  doubleButton: {
    flex: 2.1,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});