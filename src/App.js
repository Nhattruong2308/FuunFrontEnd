import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./page/Login";
import Home from "./page/Home";
import "swiper/css/bundle";
import Layout from "./layout";
import BoothDetail from "./page/BoothDetail";
import Product from "./page/Product";

function App() {
  return (
    <Box minH={"100vh"} w="100vw" bg="#ffffff">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="booth-details" element={<BoothDetail />} />
          <Route path="product" element={<Product/>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
