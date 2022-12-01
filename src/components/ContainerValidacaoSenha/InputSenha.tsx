import React from "react";
import { MainValidacao, Input } from "./InputSenha.styles";

// interface InputInfo {
//   type: "password";
//   value: string;
//   placeholder?: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

export const InputSenha: React.FC = (
//   {
//   type,
//   value,
//   placeholder,
//   onChange
// }
) => {

  return (
    <MainValidacao>
      <Input
      type={"password"}
      placeholder={"Crie uma senha"}
        // type={type}
        // value={value}
        // placeholder={placeholder}
        // onChange={onChange}
      />
    </MainValidacao>
  );
}