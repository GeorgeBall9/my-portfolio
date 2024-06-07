import { ThemeProvider } from 'styled-components';
import '../styles/global.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
