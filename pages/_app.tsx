import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider,Theme } from '@mui/material'
import { darkTheme,lightTheme,customTheme } from '../themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme:string;
}


export default function MyApp({ Component, pageProps,theme = 'dark'}:Props) {
  
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectTheme:Theme = cookieTheme === 'light' ? lightTheme : (cookieTheme === 'dark') ? darkTheme : customTheme; 

    setCurrentTheme(selectTheme)
  }, [])
  




  
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline/>
     <Component {...pageProps} />
    </ThemeProvider>
    ) 

}


// MyApp.getInitialProps = async(appContext:AppContext) => {

// const {theme} = appContext.ctx.req? (appContext.ctx.req as any).cookies: {theme:'light'}

// const validThemes = ['light','dark','custom'];

// return {
//     theme: validThemes.includes(theme) ? theme : 'dark'
//   }

// }