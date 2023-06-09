import { Box, Button, Center, Text } from "@chakra-ui/react";

const ErrorComponent = () => {
  return (
    <>
      <Box width="auto" minH="70vh" marginInline="auto">
        <Center flexDir="column">
          <Box>
            <Text fontSize="2xl" fontWeight="600">
              Oops, something went wrong...{" "}
            </Text>
            <Button
              justifySelf="flex-end"
              display="flex"
              colorScheme="blue.900"
              marginTop=".5rem"
              bgColor="blue.900"
              _hover={{ bgColor: "blue.800" }}
              fontWeight="normal"
              onClick={() => location.reload()}
              width="30%">
              Refresh
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default ErrorComponent;
