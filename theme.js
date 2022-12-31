import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    primary: '#f5402a',
    secondary: '#9801ff',
    darkColor: '#161f60',
    lightColor: '#8695A4',
    whiteColor: ' #FFFFFF',
  },
  fonts: {
    heading: `'Hurme Geometric Sans 2', sans-serif`,
    body: `'Hurme Geometric Sans 2', sans-serif`,
  },
  components: {
    // Button: {
    //   variants: {
    //     solid: {
    //       backgroundColor: 'primary',
    //       color: 'whiteColor',
    //     },
    //     ghost: {
    //       color: 'secondary',
    //     },
    //   },
    // },
    Heading: {
      variants: {
        1: {
          fontSize: ['30px', '35px', '44px'],
          lineHeight: ['40px', '45px', '60px'],
          fontWeight: '900',
          textTransform: 'uppercase',
        },
        2: {
          fontSize: '34px',
          lineHeight: '50px',
        },
        3: {
          fontSize: ['5px', '10px', '20px', '30px'],
          lineHeight: '44px',
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        4: {
          fontSize: ['15px', '18px', '20px'],
          fontWeight: '500',
          textTransform: 'uppercase',
        },
      },
    },
    // Text: {
    //   variants: {
    //     1: {
    //       fontSize: '16px',
    //       lineHeight: '23px',
    //       color: 'darkColor',
    //     },
    //     2: {
    //       fontSize: '22px',
    //       lineHeight: '60px',
    //       color: 'darkColor',
    //     },
    //     3: {
    //       fontSize: '18px',
    //       lineHeight: '26px',
    //       color: 'darkColor',
    //     },
    //     4: {
    //       fontSize: '20px',
    //       lineHeight: '29.3px',
    //       color: 'lightColor',
    //     },
    //     5: {
    //       fontSize: '14px',
    //       lineHeight: '20.5px',
    //       color: 'darkColor',
    //     },
    //     6: {
    //       fontSize: '20px',
    //       lineHeight: '29.38px',
    //       color: 'darkColor',
    //     },
    //   },
    // },
  },
})

export default customTheme
