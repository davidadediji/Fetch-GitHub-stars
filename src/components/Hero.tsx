import { Box, Button, Center, Img, Text } from '@chakra-ui/react';
import React from 'react';
import HeroImage from '../assets/images/illustration-intro.png';

export const Hero = () => {
	return (
		<Center color={'#fff'} display={'flex'} flexDirection={'column'} pb={'200px'}>
			<Img src={HeroImage} width={'500px'}></Img>
			<Text fontWeight={700} fontSize={'40px'} textAlign={'center'} my={'30px'}>
				All your files in one secure location,<br></br> accessible anywhere.
			</Text>
			<Text textAlign={'center'} mb={'30px'}>
				Fylo stores all your most important files in one secure location.<br></br> Access
				them wherever you need, share and collaborate with <br></br>friends family, and
				co-workers.
			</Text>
			<Button bg={'hsl(176, 68%, 64%)'}  px={'100px'} py={'20px'}>Get Started</Button>
		</Center>
	);
};
