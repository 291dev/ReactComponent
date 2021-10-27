import React, { useState } from "react";
import TextInput from './TextInput';

export default {
  title: "TextInput"
};

export const TextInputDefault = () => <TextInput />;

export const TextInputError = () => {
  const [str, setStr] = useState("");
  return (
    <TextInput handleError={() => {
      if (str.length === 3) {
        return true;
      } else {
        return false;
      }
    }} onChange={(e) => { setStr(e.target.value) }} label="Set 3 char." />
  )

};

export const TextInputDisabled = () => <TextInput disabled />;