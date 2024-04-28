import { Box, Flex, Image, Text } from '@chakra-ui/react'


export function PendingCat() {
  return (
    <Flex justify={'space-between'} mt={5}>
    <Flex gap={4}>
      <Box
        w={"50px"}
        h={"50px"}
        bg={"#F4E9CD"}
        rounded={"100%"}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
          <Image src={require('./../pending.png')} width="26.29px" height="18.4px"/>
      </Box>
      <Box>
        <Text
          fontFamily={"Circular Std bold"}
          color={"#001233"}
          fontSize={"14px"}
        >
          Food and Drink
        </Text>
        <Text
          fontFamily={"Circular Std book"}
          color={"#707480"}
          fontSize={"14px"}
        >
          10%
        </Text>
      </Box>
    </Flex>
    <Flex>
      <Text
        fontFamily={"Circular Std Bold"}
        color={"#001233"}
        fontSize={"16px"}
      >
        ₦20,000
      </Text>
      <Text
        fontFamily={"Circular Std Bold"}
        color={"#70748066"}
        fontSize={"16px"}
        fontWeight={400}
      >
        /₦42,000
      </Text>
    </Flex>
  </Flex>
  )
}


export function CreditCat() {
  return (
    <Flex justify={'space-between'} mt={5}>
    <Flex gap={4}>
      <Box
        w={"50px"}
        h={"50px"}
        bg={"#038A3933"}
        rounded={"100%"}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
          <Image src={require('./../credit.png')} width="19.6px" height="18.4px"/>
      </Box>
      <Box>
        <Text
          fontFamily={"Circular Std bold"}
          color={"#001233"}
          fontSize={"14px"}
        >
          Savings
        </Text>
        <Text
          fontFamily={"Circular Std book"}
          color={"#707480"}
          fontSize={"14px"}
        >
          40%
        </Text>
      </Box>
    </Flex>
    <Flex>
      <Text
        fontFamily={"Circular Std Bold"}
        color={"#001233"}
        fontSize={"16px"}
      >
        ₦10,000
      </Text>
      <Text
        fontFamily={"Circular Std Bold"}
        color={"#70748066"}
        fontSize={"16px"}
        fontWeight={400}
      >
        /₦24,000
      </Text>
    </Flex>
  </Flex>
  )
}