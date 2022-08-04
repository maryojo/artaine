import React from 'react'
import { Box, Button, Stack } from '@chakra-ui/react'


const Header = () => {
  return (
    <Box w="100%" h="70vh" bg="gray.200" pos="relative">
      <Stack pos="absolute" bottom="5" right="5" direction="row">
      <Button colorScheme="teal" size="lg" >View Prototype</Button>
      <Button colorScheme="teal" size="lg" >View Process Book</Button>
      </Stack>
    </Box>
  )
}

export default Header