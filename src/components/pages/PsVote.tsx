import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import PsHero from "../../assets/psHero.png";
import bgBlob from "../../assets/bgBlob.svg";

const PsVote = () => {
  return (
    <HStack
      paddingInline="2rem"
      backgroundImage={bgBlob}
      backgroundPosition="top right"
      backgroundSize="400px 500px"
      backgroundRepeat="no-repeat">
      <Box>
        <Heading fontSize="48px">
          <span>Cast your vote for the</span>
          <span style={{ marginLeft: ".4rem" }}>
            St
            <span>
              <StarIcon fontSize="35px" paddingBottom=".5rem" color="orange" />
            </span>
            r
          </span>
        </Heading>
        <Heading fontSize="50px">
          <span>performer for today!</span>
        </Heading>
        <Flex
          marginTop="2rem"
          bgColor="white"
          width="50%"
          height="6rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingInline="1rem"
          boxShadow="2xl"
          borderRadius="20px">
          <Text fontSize="2rem" fontWeight="bold">
            Let's Vote
          </Text>
          <Menu>
            <MenuButton
              bgColor="#FF9005"
              width="5rem"
              height="5rem"
              borderRadius="50%"
              as={Button}>
              +
            </MenuButton>
            <MenuList boxShadow="0" background="transparent">
              <MenuItem
                bgColor="blackAlpha.500"
                _hover={{ bgColor: "gray.800" }}
                width="5rem"
                fontSize="12px"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="bold"
                borderRadius="50%">
                Lat
              </MenuItem>
              <MenuItem
                bgColor="blackAlpha.500"
                _hover={{ bgColor: "gray.800" }}
                width="5rem"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="bold"
                fontSize="12px"
                borderRadius="50%">
                Long
              </MenuItem>
              <MenuItem
                bgColor="blackAlpha.500"
                _hover={{ bgColor: "gray.800" }}
                width="5rem"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="bold"
                fontSize="12px"
                borderRadius="50%">
                Combined
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <Box>
        <Image src={PsHero} alt="PS vote Hero Image" />
      </Box>
    </HStack>
  );
};

export default PsVote;
