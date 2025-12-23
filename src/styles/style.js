import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${theme.colors.dark.darkBlue};
    color: ${theme.colors.dark.white};
    font-weight: 400;
    font-size: 15px;
}`;
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;
