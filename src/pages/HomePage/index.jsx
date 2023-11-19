import { useRef, useEffect, useState } from 'react';
import { NumberInput } from '../NumberInput';
import './style.css';

export const HomePage = () => {
  const cardInputRef1 = useRef();
  const cardInputRef2 = useRef();
  const cardInputRef3 = useRef();
  const cardInputRef4 = useRef();
  const button = useRef();

  const [creditCardNumber, setCreditCardNumber] = useState(["", "", "", ""]);

  const handleCreditCardNumber = (value, position) => {
    const newCreditCard = [...creditCardNumber.slice(0, position - 1), value, ...creditCardNumber.slice(position)]
    setCreditCardNumber(newCreditCard);
  }

  const setFocus = (ref) => {
    ref.current.focus();
  }

  const send = () => {
    alert(creditCardNumber.join(" - "));
  }

  useEffect(
    () => {
      cardInputRef1.current.focus();
    }, []
  );

  return (
    <div className="container">
      <div style={{ display: "flex", padding: 5 }}>
        <NumberInput ref={cardInputRef1} onFull={(value) => { setFocus(cardInputRef2); handleCreditCardNumber(value, 1) }} />
        <NumberInput ref={cardInputRef2} onFull={(value) => { setFocus(cardInputRef3); handleCreditCardNumber(value, 2) }} />
        <NumberInput ref={cardInputRef3} onFull={(value) => { setFocus(cardInputRef4); handleCreditCardNumber(value, 3) }} />
        <NumberInput ref={cardInputRef4} onFull={(value) => { setFocus(button); handleCreditCardNumber(value, 4) }} />
        <button ref={button} onClick={send}>Odeslat</button>
      </div>
    </div>
  );
};
