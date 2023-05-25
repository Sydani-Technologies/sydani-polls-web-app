import { Box, Heading } from "@chakra-ui/react";
import * as API from "../../api/index";
import { useEffect } from "react";

const VotesView = () => {
  const getEmployees = async () => {
    const res = await API.fetchEmployees();

    console.log(res);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Box>
      <Heading>Longitude PS</Heading>
    </Box>
  );
};

export default VotesView;
