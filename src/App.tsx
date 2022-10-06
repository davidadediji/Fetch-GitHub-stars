import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Benefit } from './components/Benefit';
import { Feature } from './components/Feature';
import { Intro } from './sections/Intro';

function App() {
	return (
		<>
			<Box as='div' bg={'hsl(217, 28%, 15%)'} px={'100px'} pt={'40px'}>
				<Intro />
			</Box>
			<Feature />
			<Benefit/>
		</>
	);
}

export default App;
