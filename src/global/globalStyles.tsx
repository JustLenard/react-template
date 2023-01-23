import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
  
 `

export default GlobalStyles

export const glColors = {
	primaryGray: '#A6A6A6',

	gray1: '#D6D6D6',

	gray2: '#C3C3C3',
	gray3: '#D9D9D9',

	linkColor: '#636363',

	contentBackground: '#f7f7f7',

	textGray: '#808080',
}
