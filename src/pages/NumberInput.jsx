import { forwardRef, useState } from 'react';

export const NumberInput = forwardRef(function NumberInput({ onFull }, ref) {
    const [cardInput, setCardInput] = useState("");

    const handleCardNumber = (e) => {
        const regex = /^[0-9\b]+$/;
        const value = e.target.value;

        if (value === '' || regex.test(value)) {
            setCardInput(value)
            if (value.length === 4) {
                 if (onFull != undefined)
                    onFull(value);
            }
        }
    }

    return <input
        ref={ref}
        type="text"
        placeholder='- - - -'
        value={cardInput}
        onChange={handleCardNumber}
        maxLength={4}
    />
})