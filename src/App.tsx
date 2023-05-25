import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import NotFound from "./components/pages/errorPage";
import Home from "./components/pages/home";
import PsVote from "./components/pages/PsVote";
import VotesView from "./components/pages/votesView";

function App() {
  return (
    <>
      <Box fontFamily="primary">
        <Box>
          <Header />
        </Box>
        <Box minH="60vh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ps-vote" element={<PsVote />} />
            <Route path="/votes-view" element={<VotesView />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth">
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
