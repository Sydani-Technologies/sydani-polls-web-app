import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as api from "../../api/index";
import { sessionSetItem } from "../../utils/localStorage.utils";

export default function Login() {
  const [loginFormData, setLoginFOrmData] = useState({
    usr: "",
    pwd: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setLoginFOrmData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await api.signIn(loginFormData);
      toast({
        title: "Login successful",
        position: "top-right",
        isClosable: true,
        status: "success",
      });
      sessionSetItem("session", res?.data);
      navigate(redirect ? redirect : "/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const response = error;
      console.log(response);
      toast({
        title: response.message,
        position: "top-right",
        isClosable: true,
        status: "error",
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Signin to Sydani Polls App</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="usr">
              <FormLabel>Email address</FormLabel>
              <Input
                type="usr"
                name="usr"
                value={loginFormData.usr}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="pwd">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="pwd"
                value={loginFormData.pwd}
                onChange={handleFormChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.900"}
                onClick={handleLogin}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
