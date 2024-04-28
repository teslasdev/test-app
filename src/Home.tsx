import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CustomTabs from "./assets/Components/CustomTabs";

const Home: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      bg={colorMode === "light" ? "#FCFCFC" : "gray.800"}
      height={"100vh"}
      paddingX={5}
      paddingY={10}
    >
      <Text
        fontWeight={700}
        fontSize={"28px"}
        fontFamily={"Circular Std Black"}
      >
        Budget
      </Text>
      <Flex direction={"column"} gap={3} marginY={10}>
        <Flex gap={2}>
          <Flex
            bg={"#0466C833"}
            width={"20px"}
            height={"20px"}
            justify={"center"}
            align={"center"}
            rounded={"100%"}
          >
            <Image
              src={require("./assets/naira.png")}
              width={"10px"}
              height={"10px"}
            />
          </Flex>

          <Text
            color={"#707480"}
            fontSize={"14px"}
            fontFamily={"Circular Std Book"}
            fontWeight={"light"}
          >
            Monthly Budget
          </Text>
        </Flex>

        <Box
          bg={"white"}
          boxShadow="0px 1px 3px 0px rgba(0,0,0,0.04)"
          height={"51px"}
          rounded={"10px"}
          display={"flex"}
          alignItems={"center"}
          paddingX={4}
        >
          <Text
            fontSize={"28px"}
            fontWeight={700}
            fontFamily={"Circular Std Black"}
          >
            ₦120,000
          </Text>
        </Box>
      </Flex>
      <Flex justify={'space-between'} align={'center'} position={'relative'}>
        <CustomTabs />
        <Box width={'30px'} height={'16px'} style={{position : 'absolute' , top : 10 , right : 2}}>
            <Image src={require('./assets/Frame 5.png')} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
