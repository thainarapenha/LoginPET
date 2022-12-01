import { useState } from "react";
import lateral from "../../assets/doog.jpg";
import btnGoogle from "../../assets/iconGitHub.svg";
import btnGitHub from "../../assets/iconGoogle.svg";
import { validaSenha } from "../../utils/ValidaSenha";
import { Input } from "../ContainerValidacaoSenha/InputSenha.styles";
import { BoxButton, BoxInfo, BoxLogin, BoxOpcoes, ButtonGitHub, ButtonGoogle, ButtonLogin, CaixaForms, CaixaImagem, Campo, FormLogin, MainCaixaRegistro, TextoOpcoes, TextoRegisto, TitleLogin, Text, DicasParaSenha, TitleOrientacao, View, IconRequisitosSenha } from "./CaixaRegistro.styles";

export const CaixaRegistro: React.FC = () => {
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState(true);

  const InputSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validaSenha(event.target.value)) {
      //só entra quando a senha atende aos requisitos descritos no arquivo validaSenha.ts
      console.log("entrou e senha ta validade")
      setSenha(event.target.value);
    }
  }

  const submitFormulario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const confirmacaoSenha = (event: any) => {
    setConfirmeSenha(false);
    console.log("ta entrando aqui")
    if((event.target.value === senha)) {
      setConfirmeSenha(true);
    }
  };

  return (
    <MainCaixaRegistro>
      <BoxInfo>
        <CaixaImagem src={lateral} />
        <CaixaForms>
          <FormLogin onSubmit={submitFormulario}>
            <TitleLogin>Criar conta</TitleLogin>
            <Campo placeholder=" Digite seu nome completo" />
            <Campo placeholder=" email@exemplo.com" />

            <Input
              placeholder=" Crie uma senha"
              type="password"
              onChange={InputSenha}
            />

            <Text>{senha}</Text>

            <Campo
              placeholder=" Confirme sua senha"
              type="password"
              onChange={confirmacaoSenha}
            />

            <BoxLogin>
              <ButtonLogin>Entrar</ButtonLogin>
            </BoxLogin>

            <BoxOpcoes>
              <TextoOpcoes>Cadastrar com</TextoOpcoes>
              <BoxButton>
                <ButtonGoogle src={btnGoogle} />
                <ButtonGitHub src={btnGitHub} />
              </BoxButton>
            </BoxOpcoes>
          </FormLogin>
        </CaixaForms>
      </BoxInfo>
    </MainCaixaRegistro>
  );
}