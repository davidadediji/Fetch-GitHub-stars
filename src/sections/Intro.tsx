import React from 'react'
import { Box } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'

export const Intro = () => {
  return (
    <Box color={'#fff'} >
        <NavBar/>
        <Hero/>
    </Box>
  )
}
