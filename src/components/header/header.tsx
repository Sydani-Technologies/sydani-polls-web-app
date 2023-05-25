import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { setItem } from "../../utils/localStorage.utils";
import Logo from "../../assets/sydaniLogo.svg";

const Links = [
  {
    link: "PS Vote",
    to: "/ps-vote",
  },
  {
    link: "View PS Result",
    to: "/ps-result",
  },
];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <Box
    as={Link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={to}>
    {children}
  </Box>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userAccount = JSON.parse(localStorage.getItem("session") as string);

  const handleLogout = () => {
    setItem("session", "");
    location.reload();
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          marginInline="3rem"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box as={Link} to="/">
              <Image src={Logo} />
            </Box>
            <HStack
              marginLeft="2rem"
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink to={link.to} key={link.link}>
                  {link.link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {userAccount ? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}>
                  <Flex alignItems="center" columnGap=".4rem">
                    <Text
                      textDecoration="none"
                      display={{ base: "none", md: "block" }}>
                      {userAccount?.result?.name}
                    </Text>
                    <Avatar
                      size={"sm"}
                      src={""}
                      name={userAccount?.result?.name}
                    />
                    <ChevronDownIcon />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>My profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Link to="/auth">
              <Button fontWeight="normal">Signin or Signup</Button>
            </Link>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.to} key={link.link}>
                  {link.link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
