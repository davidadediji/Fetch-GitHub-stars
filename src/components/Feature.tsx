import { Box, Center, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Security from '../assets/images/icon-security.svg';
import Any from '../assets/images/icon-any-file.svg';
import Collaboration from '../assets/images/icon-collaboration.svg';
import Access from '../assets/images/icon-access-anywhere.svg';

export const Feature = () => {
	return (
		<Box bg={'hsl(218, 28%, 13%)'} px={'100px'} pt={'40px'}>
			<SimpleGrid columns={2} spacing={200}>
				<Box height='80px'>
					<Center display={'flex'} flexDirection={'column'}>
						<Box>
							<Img src={Access}></Img>
						</Box>
						<Text fontWeight={700} color={'#fff'} my={'10px'}>
							Access your files, anywhere
						</Text>
						<Text color={'#fff'} textAlign='center' width={350}>
							The ability to use a smartphone, tablet, or computer to access
							your account means your files follow you everywhere.
						</Text>
					</Center>
				</Box>
				<Box height='80px'>
					<Center display={'flex'} flexDirection={'column'}>
						<Img src={Security}></Img>
						<Text fontWeight={700} color={'#fff'} my={'10px'}>
							Security you can trust
						</Text>
						<Text color={'#fff'} textAlign='center' width={450}>
							Security you can trust 2-factor authentication and user-controlled
							encryption are just a couple of the security features we allow to
							help secure your files.
						</Text>
					</Center>
				</Box>
				<Box height='80px'>
					<Center display={'flex'} flexDirection={'column'}>
						<Img src={Collaboration}></Img>
						<Text fontWeight={700} color={'#fff'} my={'10px'}>Real-time collaboration</Text>
						<Text color={'#fff'} textAlign='center' width={350}>
							Securely share files and folders with friends, family and
							colleagues for live collaboration. No email attachments required.
						</Text>
					</Center>
				</Box>
				<Box height='80px'>
					<Center display={'flex'} flexDirection={'column'}>
						<Img src={Any}></Img>
						<Text fontWeight={700} color={'#fff'} my={'10px'}>Store any type of file</Text>
						<Text color={'#fff'} textAlign='center' width={350}>
							Whether you're sharing holidays photos or work documents, Fylo has
							you covered allowing for all file types to be securely stored and
							shared.
						</Text>
					</Center>
				</Box>
			</SimpleGrid>
		</Box>
	);
};
