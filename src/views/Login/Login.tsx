import image from "../../assets/fundo.jpg";
import { CaixaLogin } from "../../components/CaixaLogin";
import { BoxImage, MainLogin } from "./Login.styles";

export const Login: React.FC = () => {
  return (
    <MainLogin>
      {/* <BoxImage src={image}/> */}
      <CaixaLogin/>
    </MainLogin>
  );
}