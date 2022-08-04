import React from 'react'
import { Box, Heading, Text, Image, Icon, Stack } from '@chakra-ui/react'

const CompetitiveAnalysis = () => {
  return (
    <Stack direction="row">
    <Stack>
    <Heading>Competitive Analysis</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </Stack>
      <Stack direction="column">
        <Stack direction="row">
          <Image src="http://via.placeholder.com/100"/>
          <Image src="http://via.placeholder.com/100"/>
          <Image src="http://via.placeholder.com/100"/>
        </Stack>
        <Stack direction="row">
          <Image src="http://via.placeholder.com/100"/>
          <Image src="http://via.placeholder.com/100"/>
          <Image src="http://via.placeholder.com/100"/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CompetitiveAnalysis