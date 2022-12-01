import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const MainValidacao = styled("div")({
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    border: "1px solid red",
});
export const Input = styled("input")({
    width: "90%",
    height: "40px",
    borderRadius: "4px",
    marginBottom: "5px",
    border: "1px solid black",
});
export const ContainerValidacaoSenha = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    // border: "1px solid red",
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
export const Text = styled(Typography)({
    display: "flex",
    textAlign: "start",
    fontSize: "10px",
    border: "1px solid black",
});

export const IconRequisitosSenha = styled("img")({
    width: "100%",
    maxWidth: "10px",
});