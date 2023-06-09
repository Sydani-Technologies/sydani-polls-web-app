import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";

const SearchComponent = ({
  handleSearch,
  placeholder,
}: {
  handleSearch: (s: string) => void;
  placeholder?: string;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(searchTerm);
    }
  };

  return (
    <>
      <Box width={{ base: "90%", md: "50%" }}>
        <FormControl>
          <InputGroup>
            <Input
              bgColor="white"
              placeholder={placeholder ?? "Search heroes"}
              type="text"
              value={searchTerm}
              onKeyDown={(event) => handleKeyDown(event)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputRightAddon
              width="fit-content"
              p="0"
              onClick={() => handleSearch(searchTerm)}>
              <Button bgColor="transparent">
                <SearchIcon />
              </Button>
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchComponent;
