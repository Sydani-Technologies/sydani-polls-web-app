import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as API from "../api/index";
import EmployeeCard from "../components/employeeCard/employeeCard";
import SearchComponent from "../components/search/search";
import ErrorComponent from "../components/error/errorComp";
import { IEmployee } from "./weeklyHeroVote";

const OperationsPS = () => {
  const [employees, setEmployees] = useState<IEmployee[]>();
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>();
  const toast = useToast();

  const getEmployees = async () => {
    const res = await API.fetchEmployees();
    const operations = res.data?.message?.filter((employee: IEmployee) => {
      return employee.department.includes("Operations");
    });

    setEmployees(operations);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleSearchPosts = (searchTerm: string) => {
    const filteredEmployees = employees?.filter((employee) => {
      return employee?.user_id.includes(searchTerm);
    });

    setFilteredEmployees(filteredEmployees);
  };

  const handleOperationsVote = (employee: IEmployee) => {
    toast({
      title: "Vote saved successfully.",
      description: `Your vote for ${employee.user_id} in ${employee.department} for star of Operations PS has been saved successfully`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box width="90%" marginInline="auto">
      <VStack width="90%" marginInline="auto" marginTop="2rem">
        <Heading
          color="blue.900"
          fontSize={{ base: "lg", sm: "xl", md: "3xl" }}>
          WHO IS THE STAR OF TODAY'S OPERATIONS PS?
        </Heading>
        <Text fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed
          adipisci ullam doloremque vitae iste ratione quos expedita facilis
          illo animi error, doloribus eius repellat! Doloribus nostrum atque
          distinctio corrupti.
        </Text>
      </VStack>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBlock="2rem">
        <SearchComponent
          placeholder="Search for your star!!"
          handleSearch={handleSearchPosts}
        />
      </Flex>
      <SimpleGrid columns={[1, 2, 2, 3, 4]} gap="30px" placeItems="center">
        {filteredEmployees ? (
          <>
            {filteredEmployees?.map((employee, i) => (
              <EmployeeCard
                handleVote={handleOperationsVote}
                key={i}
                employee={employee}
              />
            ))}
          </>
        ) : (
          <>
            {employees?.map((employee, i) => (
              <EmployeeCard
                handleVote={handleOperationsVote}
                key={i}
                employee={employee}
              />
            ))}
          </>
        )}
      </SimpleGrid>
      {!filteredEmployees && !employees?.length ? <ErrorComponent /> : null}
    </Box>
  );
};

export default OperationsPS;
