import { useState } from 'react';

export const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState(''); // NUEVO: Historial de la operación

  const handleNumber = (num: string) => {
    if (display === 'Error') {
      setDisplay(num);
      setHistory('');
      return;
    }

    const tokens = display.trim().split(' ');
    const currentToken = tokens[tokens.length - 1];

    if (num === '.' && currentToken.includes('.')) {
      return;
    }

    if (display === '0' && num === '0') {
      return;
    }

    if (display === '0' && num !== '.') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    if (display === 'Error') return;

    if (operator === '-' && display === '0') {
      setDisplay('-');
      return;
    }

    const trimmed = display.trim();
    const lastChar = trimmed.slice(-1);

    if (['+', '-', '×', '÷', '^'].includes(lastChar)) {
      setDisplay(trimmed.slice(0, -1) + ' ' + operator + ' ');
    } else {
      setDisplay(display + ' ' + operator + ' ');
    }
  };

  const clear = () => {
    setDisplay('0');
    setHistory('');
  };

  const backspace = () => {
    if (display === 'Error' || display.length <= 1) {
      setDisplay('0');
      return;
    }

    const trimmed = display.trim();
    if (trimmed.endsWith(' ')) {
      setDisplay(trimmed.slice(0, -2));
    } else {
      const updated = trimmed.slice(0, -1);
      setDisplay(updated === '' ? '0' : updated);
    }
  };

  const squareRoot = () => {
    try {
      if (display === 'Error') return;
      const value = parseFloat(display);
      if (isNaN(value) || value < 0) {
        setDisplay('Error');
      } else {
        const result = Math.sqrt(value);
        setHistory(`√(${display}) =`);
        setDisplay(String(result));
      }
    } catch (e) {
      setDisplay('Error');
    }
  };

  const calculate = () => {
    try {
      if (display === 'Error') return;

      const sanitizedDisplay = display.trim();
      const directNumber = parseFloat(sanitizedDisplay);
      if (!isNaN(directNumber) && !sanitizedDisplay.includes(' ') && sanitizedDisplay.startsWith('-')) {
        setDisplay(String(directNumber));
        return;
      }

      const tokens = sanitizedDisplay.split(' ');
      if (tokens.length === 0) return;

      let total = parseFloat(tokens[0]) || 0;

      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextVal = parseFloat(tokens[i + 1]);

        if (isNaN(nextVal)) {
          setDisplay('Error');
          return;
        }

        if (operator === '+') total += nextVal;
        if (operator === '-') total -= nextVal;
        if (operator === '×' || operator === '*') total *= nextVal;
        if (operator === '÷' || operator === '/') {
          if (nextVal === 0) {
            setDisplay('Error');
            return;
          }
          total /= nextVal;
        }
        if (operator === '^') {
          total = Math.pow(total, nextVal);
        }
      }

      setHistory(display + ' =');
      setDisplay(String(total));
    } catch (error) {
      setDisplay('Error');
    }
  };

  return {
    display,
    history, // Exportamos el historial
    handleNumber,
    handleOperator,
    clear,
    backspace,
    calculate,
    squareRoot,
  };
};