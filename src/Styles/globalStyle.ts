import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-1Thin.ttf') format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-2ExtraLight.ttf') format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-3Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-4Regular.ttf') format('truetype');
    font-weight: 400; // 일반적으로 사용하는 굵기
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-5SemiBold.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-6Bold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-7Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-8ExtraBold.ttf') format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('../fonts/Paperlogy-9Black.ttf') format('truetype');
    font-weight: 900;
  }

  html, body {
    height: 100%; // html과 body의 높이를 100%로 설정
    margin: 0;
    padding: 0;
  }

  *{
      margin:0;
      padding:0;
      box-sizing : border-box;
      font-family: "Paperlogy";
  }

  body{
      margin: 0;
      width : 390px;
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-height : 100vh;
    }
`;
