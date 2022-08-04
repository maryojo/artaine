import React from 'react'
import { Heading, Text, Stack, Box, Image } from '@chakra-ui/react'



const Insights = () => {
  return (
    <div>
    <Box>
    <Heading>Insights</Heading>
      <Text>The prompt gotten was to design a mobile app for art auction. Based on this prompt, I came up with important questions and clarifactions that would form a basis for the Insights. I highlighted my thoughts  below.</Text>
      <Heading>Pinpoints & Painpoints</Heading>
      <Image src="https://via.placeholder.com/1000x500"/>
    </Box>
      <Box>
      <Heading>Insights Methods</Heading>
      <Text>I carried out a preliminary survey to get general views regarding the prompt. This survey was The data collected was used to curate interview questions for 5 participants who were directly and indirectly related to the art industry. Direct discussions  gave me a deeper insight into the problems being faced, user pain points and opportunities for improvement</Text>
      <Stack direction="row">
        <Box>
          <Heading>Use Case Stories</Heading>
          <Stack direction="row">
            <Image src="https://via.placeholder.com/500"/>
            <Image src="https://via.placeholder.com/500"/>
          </Stack>
        </Box>
      </Stack>
      </Box>
      <Box>
      <Heading>Insights Methods</Heading>
      <Text>I carried out a preliminary survey to get general views regarding the prompt. This survey was The data collected was used to curate interview questions for 5 participants who were directly and indirectly related to the art industry. Direct discussions  gave me a deeper insight into the problems being faced, user pain points and opportunities for improvement</Text>
      <Stack direction="row">
        {/* <Image/> */}
        <Box>
          <Heading>Interview</Heading>
          <Text>About 50 surveys were completed by target users, this gave a broad insight into the general problems being faced. Inference: 65% of target users reported that they particpated in art auctions</Text>
        </Box>
        
      </Stack>
      </Box>
    </div>
  )
}

export default Insights