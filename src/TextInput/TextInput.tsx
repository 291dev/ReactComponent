import * as React from "react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import './TextInput.scss';
import { Props } from "./TextInput.types";

const TextInput: FC<Props> = ({ handleError, disabled, label, defaultValue, onChange, className, fullWidth }) => {

  const realClassName = className ? className : '';
  const initialClassValue = realClassName;
  const [classValue, setClassValue] = useState(realClassName);
  const [error, setError] = useState(false);


  const id: string = (Math.random() + 1).toString(36).substring(2);
  console.log(id)
  React.useLayoutEffect(() => {
    if (handleError && handleError()) {
      setError(true)
    } else {
      setError(false)
    }
  })

  useEffect(() => {
    if (error) {
      setClassValue(`${classValue} error`)
    } else {
      setClassValue(initialClassValue)
    }
  }, [error])


  useEffect(() => {
    if (fullWidth) {
      setClassValue(`${classValue} fullWidth`)
    } else {
      setClassValue(initialClassValue)
    }
  }, [fullWidth])

  return <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} type="text" disabled={disabled} className={`text-form ${classValue}`} onChange={onChange} value={defaultValue} />
  </div>;
};

export default TextInput;
