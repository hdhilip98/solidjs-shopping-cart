import { Routes, Route } from "solid-app-router";
import { Container, Flex } from "@hope-ui/solid";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const App = () => {
  return (
    <Flex direction="column" gap="$4" backgroundColor="$neutral1" minH="100vh" pb="$4">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Flex>
  );
};

export default App;
