import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }

  button{
    position: relative;
    width: 177px;
    height: 41px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    background: #E4105D;
    border: 1px solid #E4105D;
    border-radius: 27px;    
  }

  button::after{
    content: '';
    position: absolute;
    border: 1px solid #E4105D;
    top: -5px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px;
}

button:hover{
    cursor: pointer;    
}
`