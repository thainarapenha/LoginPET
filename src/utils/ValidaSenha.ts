const regexLetras = /(?=.*[A-Z])(?=.*[a-z]).{8,16}/g
const regexNumero = /(?=.*[0-9]){3}/g
const regexEspecial = /(?=.*[!@#\$%\^&\*])/g

export const validaLetras = (value: string) => 
  regexLetras.test(value)

export const validaNumero = (value: string) => 
  regexNumero.test(value)

export const validaEspecial = (value: string) => 
  regexEspecial.test(value)

export const tamanhoSenha = (value: string) => 
  value.length >= 8 && value.length <= 16;

export const validaSenha = (password: string) => {
  if (password === "") return true;
  
  return (tamanhoSenha(password) && validaLetras(password) && validaNumero(password) && validaEspecial(password));
}