import { createGlobalStyle } from 'styled-components'
import './_fonts.scss'

export default createGlobalStyle`
  :root {
    --base-color: #F8A500;
    --color-dark: #061365;
    --color-light: #fff;
    --page-max-width: 1200px;
    --custom-ease-1: cubic-bezier(0.475,0.425,0,0.995);
    --custom-ease-2: cubic-bezier(0.835,-0.005,0.06,1);
    --custom-ease-3: cubic-bezier(0.19,1,0.22,1);
    --custom-ease-4: cubic-bezier(0.63,0.03,0.21,1);
    --primary-ease: var(--custom-ease-1);
    --body-font: 'HaasGroteskDS45', serif;
    --header-font: 'HaasGroteskDS35', serif;
  }
`
