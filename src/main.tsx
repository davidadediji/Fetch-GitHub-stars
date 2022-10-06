import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/raleway"
import "@fontsource/open-sans"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './utils/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
);
