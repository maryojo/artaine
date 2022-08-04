import React from 'react'
import { Stack, Text, Icon } from '@chakra-ui/react'

const AboutCard = ({icon, title, description}) => {
  return (
    <Stack direction="row">
          <Icon as={icon}/>
          <Stack direction="column">
            <h2>{title}</h2>
            <Text>{description}</Text>
          </Stack>
    </Stack>
  )
}

export default AboutCard