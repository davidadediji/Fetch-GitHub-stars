import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
    styles: {
      global: {
        'html, body': {
          fontSize:'14px'
        },
        a: {
          color: 'teal.500',
        },
      },
    },
  })
  
  export default theme