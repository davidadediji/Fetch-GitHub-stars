import { Flex, Img, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/images/logo.svg'

export const NavBar = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Img src={Logo} width={'150px'}></Img>
        <Box display={'flex'} gap={'30px'}> 
            <Text>Features</Text>
            <Text>Team</Text>
            <Text>Sign in</Text>
        </Box>
    </Flex>
  )
}
