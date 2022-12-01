import { CaixaLogin } from "../../components/CaixaLogin";
import { MainLogin } from "./Login.styles";

export const Login: React.FC = () => {
  return (
    <MainLogin>
      <CaixaLogin/>
    </MainLogin>
  );
}