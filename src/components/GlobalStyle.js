import { createGlobalStyle } from "styled-components"
import DXNPeriod from "../fonts/DXNPeriod.ttf"
import DXPnM from "../fonts/DXPnM.ttf"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: DXNPeriod;
    src: url(${DXNPeriod});
  }
  @font-face {
    font-family: DXPnM;
    src: url(${DXPnM});
  }
  
`
export default GlobalStyle
