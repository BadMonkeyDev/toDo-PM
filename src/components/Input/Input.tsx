import React, {FC} from 'react';
import classes from './Input.module.css'
import {RefType} from "../../global";

interface InputProps {
    value: string
    setValue: (input: string) => void
    inputRef: RefType<HTMLInputElement>
    isValid: boolean | null;
    errorMessage: string;
}

const Input: FC<InputProps> = ({value, setValue, inputRef, isValid, errorMessage}) => {
    return (
        <div className={classes.input}>
            <input
                className={`${classes.inputField} ${!isValid && classes.inputError}`}
                type="text"
                placeholder="Enter description"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={inputRef}
            />
            {!isValid && <div className={classes.inputErrorMessage}>{errorMessage}</div>}
        </div>
    );
};

export default Input;