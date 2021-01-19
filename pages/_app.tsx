import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
}
`;
function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
