import { BoxButton, BoxInfo, BoxLogin, BoxOpcoes, ButtonGitHub, ButtonGoogle, ButtonLogin, CaixaForms, CaixaImagem, Campo, FormLogin, MainCaixaLogin, TextoOpcoes, TextoRegisto, TitleLogin } from "./CaixaLogin.styles";
import lateral from "../../assets/doog.jpg";
import btnGoogle from "../../assets/iconGitHub.svg";
import btnGitHub from "../../assets/iconGoogle.svg";
import { Link } from "react-router-dom";

export const CaixaLogin: React.FC = () => {
  return (
    <MainCaixaLogin>
      <BoxInfo>
        <CaixaImagem src={lateral}/>
        <CaixaForms>
          <FormLogin>
          <TitleLogin>Fazer Login</TitleLogin>
          <Campo placeholder=" email@exemplo.com"/>
          <Campo type="password" placeholder=" digite sua senha"/>

          <BoxLogin>
            <Link to="/cadastrar">Criar uma conta</Link>
            {/* <TextoRegisto>Criar uma conta</TextoRegisto> */}
            <ButtonLogin>Entrar</ButtonLogin>
          </BoxLogin>

          <BoxOpcoes>
            <TextoOpcoes>Logar com</TextoOpcoes>
            <BoxButton>
              <ButtonGoogle src={btnGoogle}/>
              <ButtonGitHub src={btnGitHub}/>
            </BoxButton>
          </BoxOpcoes>
          </FormLogin>
        </CaixaForms>
      </BoxInfo>
    </MainCaixaLogin>
  );
}