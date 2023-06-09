import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/auth/login";
import NotFound from "./pages/errorPage";
import Home from "./pages/home";
import PsVote from "./pages/PsVote";
import VotesView from "./pages/votesView";
import Footer from "./components/footer/footer";
import WeeklyHeroVote from "./pages/weeklyHeroVote";
import OperationsPS from "./pages/operationsPs";
import OperationsResult from "./pages/results/operationsPs";
import ScrollToTop from "./utils/scrolltoTop.utils";
import AuthChecker from "./utils/authChecker.utils";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Box fontFamily="primary">
        <ScrollToTop />
        <AuthChecker />
        <Box>{pathname === "/auth" ? null : <Header />}</Box>
        <Box minH="60vh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ps-vote" element={<PsVote />} />
            <Route
              path="/operationa-vote/result"
              element={<OperationsResult />}
            />
            <Route path="/ps-vote/vote" element={<VotesView />} />
            <Route path="/hero-vote" element={<WeeklyHeroVote />} />
            <Route path="/operations-vote" element={<OperationsPS />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth">
              <Route index element={<Login />} />
            </Route>
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
