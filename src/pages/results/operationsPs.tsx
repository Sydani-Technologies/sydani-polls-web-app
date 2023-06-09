import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";
import Bar from "../../components/charts/bar";
import { DateRangeFilters, getDates } from "../../utils/dateHelper.utils";
import { useState } from "react";
import RechartsBarChart from "../../components/charts/reBar";

const OperationsResult = () => {
  const [dateRange, setDateRange] = useState<string>("");

  const applyDate = () => {
    const dates = getDates(dateRange);
    console.log(dates);
  };

  return (
    <Box>
      <Heading>Results of the vote</Heading>
      <Flex
        border="2px solid red"
        justifyContent="space-around"
        width="90%"
        marginInline="auto">
        <Box width="35%">
          <Box>
            <FormControl>
              <FormLabel>Selct Date Range</FormLabel>
              <Select
                onChange={(e) => setDateRange(e.target.value)}
                placeholder="Select Date Range...">
                {DateRangeFilters.map((dateRange) => (
                  <option key={dateRange} value={dateRange}>
                    {dateRange}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Button onClick={applyDate}>Apply Date</Button>
          </Box>
        </Box>
        <Box width="50%">
          {/* <Bar /> */}
          <RechartsBarChart />
        </Box>
      </Flex>
    </Box>
  );
};

export default OperationsResult;
