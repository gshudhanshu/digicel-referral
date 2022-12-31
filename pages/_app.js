import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '../components/Fonts'
import theme from '../theme'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// const theme = extendTheme({
//   fonts: {
//     heading: 'Hurme Geometric Sans 2',
//     body: 'Hurme Geometric Sans 2',
//   },
// })

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
