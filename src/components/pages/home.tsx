import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import HeroImage from "../../assets/heroImage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleVote = () => {
    console.log(value);

    if (value === "PS") navigate("/ps-vote");
    if (value === "Hero") navigate("/hero");
    if (value === "Operations") navigate("/operations");
  };

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.900",
                zIndex: -1,
              }}>
              One System,
            </Text>
            <br />
            <Text as={"span"} color={"blue.900"}>
              All Polls or Votes.
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            This is the Sydani votes app, a single application for all polls and
            votes in the Sydani Ecosystem. PS Session Star of the Week Vote,
            Operations Weeting star vote, Hero of the Week vote and
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"blue.900"}
              onClick={onOpen}
              _hover={{ bg: "blue.800" }}>
              Get started
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}>
          <Blob
            w={"100%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "blue.900")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              h={"100%"}
              w={"100%"}
              src={HeroImage}
            />
          </Box>
        </Flex>
      </Stack>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Poll or Vote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>What are you voting for?</FormLabel>
              <Select
                placeholder="Select vote"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
                <option value="PS">Star of Today's PS</option>
                <option value="Hero">Hero of the Week</option>
                <option value="Operations">Star of Operations Meeting</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              fontWeight="normal"
              variant="ghost"
              mr={3}
              onClick={onClose}>
              Close
            </Button>
            <Button
              color="white"
              fontWeight="normal"
              bgColor="blue.900"
              _hover={{ bg: "blue.800" }}
              onClick={handleVote}>
              Vote
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="#ECEFF4"
      />
    </Icon>
  );
};
