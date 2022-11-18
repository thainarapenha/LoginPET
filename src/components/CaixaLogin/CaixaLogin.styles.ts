import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MainCaixaLogin = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
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
});
export const TitleLogin = styled(Typography)({
    fontSize: "32px",
    marginBottom: "15px",
});
export const FormLogin = styled("form")({
    width: "80%",
    height: "80%",
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
    marginBottom: "20px",
    border: "1px solid black",
});
export const BoxLogin = styled("div")({
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15%",
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
    width: "50%",
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