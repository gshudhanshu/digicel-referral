import { ColorModeScript, extendTheme } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

// import theme from './theme'

const config = {
  initialColorMode: 'dark',
}

const theme = extendTheme({
  config,
})

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
