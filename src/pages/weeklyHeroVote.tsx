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

export interface IEmployee {
  access_card: string;
  department: string;
  image: string;
  personal_email: string;
  prefered_email: string;
  ps_group: string;
  user_id: string;
}

export interface EmployeesType {
  message: IEmployee[];
}

const WeeklyHeroVote = () => {
  const [employees, setEmployees] = useState<EmployeesType>();
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>();
  const toast = useToast();

  const getEmployees = async () => {
    const res = await API.fetchEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleSearchPosts = (searchTerm: string) => {
    const filteredEmployees = employees?.message.filter((employee) => {
      return employee?.user_id.includes(searchTerm);
    });

    setFilteredEmployees(filteredEmployees);
  };

  const handleHeroVote = (employee: IEmployee) => {
    toast({
      title: "Vote saved successfully.",
      description: `Your vote for ${employee.user_id} in ${employee.ps_group} for Hero of the week has been saved successfully`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      <Box width="90%" marginInline="auto">
        <VStack width="90%" marginInline="auto" marginTop="2rem">
          <Heading
            color="blue.900"
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
            LET'S CROWN A HERO!!!🕺💃🎉
          </Heading>
          <Text fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem" }}>
            Hello there, lovely Sydanite! This is your opportunity for a show of
            appreciation to your special someone for the week, so go for it!
            Vote your Hero! 🎉🎈🤗
          </Text>
        </VStack>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBlock="2rem">
          <SearchComponent handleSearch={handleSearchPosts} />
        </Flex>
        <SimpleGrid columns={[1, 2, 2, 3, 4]} gap="30px" placeItems="center">
          {filteredEmployees ? (
            <>
              {filteredEmployees?.map((employee, i) => (
                <EmployeeCard
                  handleVote={handleHeroVote}
                  key={i}
                  employee={employee}
                />
              ))}
            </>
          ) : (
            <>
              {employees?.message.map((employee, i) => (
                <EmployeeCard
                  handleVote={handleHeroVote}
                  key={i}
                  employee={employee}
                />
              ))}
            </>
          )}
        </SimpleGrid>
        {!filteredEmployees && !employees?.message?.length ? (
          <ErrorComponent />
        ) : null}
      </Box>
    </>
  );
};

export default WeeklyHeroVote;
