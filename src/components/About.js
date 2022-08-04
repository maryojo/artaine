import React from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'
import AboutCard from './AboutCard'
import {AiOutlineIdcard} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'

const About = () => {
  return (
    <div>
      <Heading fontSize="md">About</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
      <Stack direction="row">
        <AboutCard icon={AiOutlineIdcard} title="Role" description={"Hiiiiiiiiii"}/>
        <AboutCard icon={BiTime} title="Role" description={"Hiiiiiiiiii"}/>
        <AboutCard icon={AiOutlineIdcard} title="Role" description={"Hiiiiiiiiii"}/>
        <AboutCard icon={AiOutlineIdcard} title="Role" description={"Hiiiiiiiiii"}/>
      </Stack>
    </div>
  )
}

export default About