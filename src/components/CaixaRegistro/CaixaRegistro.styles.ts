import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MainCaixaRegistro = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "5px solid red",
});
export const BoxInfo = styled("div")({
    width: "70%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: "32px",
    // border: "3px solid blue",
});
export const CaixaImagem = styled("img")({
    width: "50%",
    borderRadius: "32px 0 0 32px",
    // border: "1px solid red",
});
export const CaixaForms = styled("div")({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 32px 32px 0",
    background: "white",
    // border: "1px solid red",
});
export const TitleLogin = styled(Typography)({
    fontSize: "32px",
    marginBottom: "15px",
});
export const FormLogin = styled("form")({
    width: "95%",
    height: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // border: "3px solid black",
});
export const Campo = styled("input")({
    width: "90%",
    height: "40px",
    borderRadius: "4px",
    marginBottom: "5px",
    border: "1px solid black",
});
export const BoxLogin = styled("div")({
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
    // border: "1px solid black",
});
export const BoxOpcoes = styled("div")({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // border: "1px solid black",
});
export const BoxButton = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // border: "1px solid black",
});
export const TextoRegisto = styled(Typography)({
    fontSize: "14px",
    color: "#0000FF",
    cursor: "pointer",
    // border: "1px solid black",
});
export const ButtonLogin = styled("button")({
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "white",
    background: "#4186f7",
});
export const TextoOpcoes = styled(Typography)({
    fontSize: "16px",
    color: "black",
    marginBottom: "10px",
});
export const ButtonGoogle = styled("img")({
    width: "100%",
    maxWidth: "40px",
    cursor: "pointer",
    color: "white",
    // border: "1px solid black",
});
export const ButtonGitHub = styled("img")({
    width: "100%",
    maxWidth: "40px",
    cursor: "pointer",
    color: "white",
    // border: "1px solid black",
});
export const Text = styled(Typography)({
    display: "flex",
    textAlign: "start",
    fontSize: "10px",
    // border: "1px solid black",
});

// export const Input = styled("input")({
//     width: "90%",
//     height: "40px",
//     borderRadius: "4px",
//     marginBottom: "5px",
//     border: "1px solid black",
// });
export const DicasParaSenha = styled("input")({
    border: "1px solid red",
});
export const TitleOrientacao = styled(Typography)({
    display: "flex",
    textAlign: "start",
    fontSize: "12px",
    border: "1px solid red",
});
export const View = styled("div")({
    // border: "1px solid red",
});
export const IconRequisitosSenha = styled("img")({
    width: "100%",
    maxWidth: "10px",
});