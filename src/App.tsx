import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import BottomNavigation from "./assets/Components/BottomNavigation";
import Home from "./Home";
import './index.css'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
    <BottomNavigation />
  </ChakraProvider>
);
