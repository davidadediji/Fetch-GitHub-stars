import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import Productive from '../assets/images/illustration-stay-productive.png';

export const Benefit = () => {
	return (
		<Flex
			direction={'row'}
			bg={'hsl(218, 28%, 13%)'}
			px={'100px'}
			pt={'40px'}
			py={'200px'}
		>
			<Box>
				<Img src={Productive} width={'600px'}></Img>
			</Box>
			<Box
                pl={'50px'}
				justifyContent={'center'}
				display={'flex'}
				flexDirection={'column'}
			>
				<Text fontWeight={700} fontSize={22} color={'#fff'} mb={'15px'}>Stay productive, wherever you are</Text>
				<Text color={'#fff'} mb={'15px'}>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all of your file storage needs.{' '}
				</Text>
				<Text color={'#fff'}>
					{' '}
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachments required.
				</Text>
			</Box>
		</Flex>
	);
};
