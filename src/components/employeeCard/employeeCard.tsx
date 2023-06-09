import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { IEmployee } from "../../pages/weeklyHeroVote";
import { formatImageUrl } from "../../utils/formatImage.utils";

const EmployeeCard = ({
  employee,
  handleVote,
}: {
  employee: IEmployee;
  handleVote: (emp: IEmployee) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxHeight="400px" maxW="300px" boxShadow="lg">
        <CardBody>
          <Box width="250px" height="200px">
            <Image
              maxHeight="200px"
              objectFit="contain"
              minWidth="100%"
              src={formatImageUrl(employee.image)}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading noOfLines={1} size="sm">
              {employee.user_id}
            </Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              onClick={onOpen}
              variant="solid"
              bgColor="blue.900"
              colorScheme="blue">
              Vote
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Are you sure you want to vote for: {employee.user_id}
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              fontWeight="normal"
              variant="ghost"
              mr={3}
              _hover={{ bg: "red.600", color: "white" }}
              onClick={onClose}>
              Close
            </Button>
            <Button
              color="white"
              fontWeight="normal"
              bgColor="green.500"
              _hover={{ bg: "green.600" }}
              onClick={() => {
                onClose();
                handleVote(employee);
              }}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmployeeCard;
