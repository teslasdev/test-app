import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const BottomNavigation: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bg={colorMode === "light" ? "white" : "gray.800"}
      p="4"
      justify="space-around"
      align="center"
      pos="fixed"
      bottom="0"
      width="100%"
      boxShadow="0px 1px 3px 0px rgba(0,0,0,0.04)"
    >
      <Box display="flex" gap={"1"} flexDirection={"column"} alignItems="center">
        <Image
          src={require("../../assets/home.png")}
          width="23.53px"
          height="20px"
        />
        <Text fontSize={"12px"} color={"#C1C4CD"}>
          Home
        </Text>
      </Box>
      <Box display="flex" gap={"1"} flexDirection={"column"} alignItems="center">
        <Image
          src={require("../../assets/report.png")}
          width="25px"
          height="20px"
        />
        <Text fontSize={"12px"} color={"#C1C4CD"}>
          Reports
        </Text>
      </Box>
      <Box display="flex" gap={"1"} flexDirection={"column"} alignItems="center">
        <Image
          src={require("../../assets/chat.png")}
          width="23px"
          height="23px"
        />
        <Text fontSize={"12px"} color={"#C1C4CD"}>
          Chat
        </Text>
      </Box>
      <Box display="flex" gap={"1"} flexDirection={"column"} alignItems="center">
        <Image
          src={require("../../assets/budget.png")}
          width="20px"
          height="20px"
        />
        <Text fontSize={"12px"} color={"#C1C4CD"}>
          Budget
        </Text>
      </Box>
      <Box display="flex" gap={"1"} flexDirection={"column"} alignItems="center">
        <Image
          src={require("../../assets/profile.png")}
          width="20px"
          height="20px"
        />
        <Text fontSize={"12px"} color={"#C1C4CD"}>
          Profile
        </Text>
      </Box>
    </Flex>
  );
};

export default BottomNavigation;
