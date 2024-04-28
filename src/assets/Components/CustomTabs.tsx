import {
  Flex,
  Box,
  Text,
  Container,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { CreditCat, PendingCat } from "./Categories";

function CustomTabs() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <Flex w={"100%"}>
      <Box w={"100%"}>
        <Flex w={"100%"}>
          <Box p={2} cursor="pointer" onClick={() => setActiveTab(1)}>
            <Text
              fontFamily={"Circular Std Book"}
              fontSize="16px"
              fontWeight="400"
              color={activeTab === 1 ? "#0466C8" : "#707480"}
            >
              Last Month
              {activeTab === 1 && (
                <Box
                  bg={"#0466C8"}
                  height={"2px"}
                  width={"30px"}
                  rounded={"100px"}
                />
              )}
            </Text>
          </Box>
          <Box p={2} cursor="pointer" onClick={() => setActiveTab(2)}>
            <Text
              fontFamily={"Circular Std Book"}
              fontSize="16px"
              fontWeight="400"
              color={activeTab === 2 ? "#0466C8" : "#707480"}
            >
              This Month
              {activeTab === 2 && (
                <Box
                  bg={"#0466C8"}
                  height={"2px"}
                  width={"30px"}
                  rounded={"100px"}
                />
              )}
            </Text>
          </Box>
        </Flex>
        <Box mt={2} w={"100%"}>
          {/* Content for each tab */}
          {activeTab === 2 && (
            <Container width={"100%"} p={2} w={"100%"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
              >
                <Box
                  w={"150px"}
                  border={"10px solid #0466C866"}
                  rounded={"100%"}
                  h={"150px"}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <CircularProgress
                    value={49}
                    capIsRound
                    color="#0466C8"
                    size="150px"
                    thickness={5}
                    trackColor="#ffffff"
                  >
                    <CircularProgressLabel>
                      <Text
                        color={"#0466C8"}
                        fontFamily={"Circular Std Black"}
                        fontSize={"36px"}
                      >
                        49%
                      </Text>
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Box>

              <Box
                width={"100%"}
                p={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                w={"100%"}
                mt={4}
              >
                <Text
                  fontFamily={"Circular Std Book"}
                  color={"#707480"}
                  fontSize={"14px"}
                >
                  Amount spent so far
                </Text>
                <Flex>
                  <Text
                    fontFamily={"Circular Std Bold"}
                    color={"#0466C8"}
                    fontSize={"16px"}
                  >
                    ₦50,000
                  </Text>
                  <Text
                    fontFamily={"Circular Std Bold"}
                    color={"#0466C866"}
                    fontSize={"16px"}
                    fontWeight={400}
                  >
                    /₦20,000
                  </Text>
                </Flex>
              </Box>

              <Box mt={4}>
                <Text
                  color={"#001233"}
                  fontSize={"21px"}
                  fontFamily={"Circular Std Bold"}
                >
                  Category Breakdown
                </Text>
                <Flex direction={"column"} gap={5}>
                  <PendingCat />
                  <CreditCat />
                </Flex>
              </Box>
            </Container>
          )}
          {activeTab === 1 && <Text>Content for Tab 2</Text>}
        </Box>
      </Box>
    </Flex>
  );
}

export default CustomTabs;
