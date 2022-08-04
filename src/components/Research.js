import React from 'react'
import { Heading, Text, Stack, Box, Image } from '@chakra-ui/react'
import { Chart } from 'react-google-charts'

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

const Research = () => {
  return (
    <div>
    <Box>
    <Heading>Research</Heading>
      <Text>The prompt gotten was to design a mobile app for art auction. Based on this prompt, I came up with important questions and clarifactions that would form a basis for the research. I highlighted my thoughts  below.</Text>
      <Heading>Research Goals</Heading>
      <Stack direction="row">
      <Box p={5} shadow='md' borderWidth='1px'>
        <Text mt={4}>Hikjkj</Text>
     </Box>
      </Stack>
    </Box>
      <Box>
      <Heading>Research Methods</Heading>
      <Text>I carried out a preliminary survey to get general views regarding the prompt. This survey was The data collected was used to curate interview questions for 5 participants who were directly and indirectly related to the art industry. Direct discussions  gave me a deeper insight into the problems being faced, user pain points and opportunities for improvement</Text>
      <Stack direction="row">
        <Box>
          <Heading>Preliminary Method</Heading>
          <Text>About 50 surveys were completed by target users, this gave a broad insight into the general problems being faced. Inference: 65% of target users reported that they particpated in art auctions</Text>
        </Box>
        <Chart
         chartType="PieChart"
         data={data}
         options={options}
         width="100%"
         height="400px"
        />
      </Stack>
      </Box>
      <Box>
      <Heading>Research Methods</Heading>
      <Text>I carried out a preliminary survey to get general views regarding the prompt. This survey was The data collected was used to curate interview questions for 5 participants who were directly and indirectly related to the art industry. Direct discussions  gave me a deeper insight into the problems being faced, user pain points and opportunities for improvement</Text>
      <Stack direction="row">
        <Image src="https://via.placeholder.com/500x400"/>
        <Box>
          <Heading>Interview</Heading>
          <Text>About 50 surveys were completed by target users, this gave a broad insight into the general problems being faced. Inference: 65% of target users reported that they particpated in art auctions</Text>
        </Box>
        
      </Stack>
      </Box>
    </div>
  )
}

export default Research