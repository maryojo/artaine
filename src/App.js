import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Research from "./components/Research";
import Insights from "./components/Insights";
import CompetitiveAnalysis from "./components/CompetitiveAnalysis";
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box bg="gray.900" color="whiteAlpha.900">
     <Header/>
     <Box px="200px" py="100px">
     <About/>
     <Research/>
     <Insights/>
     <CompetitiveAnalysis/>
     </Box>
    </Box>
  );
}

export default App;
