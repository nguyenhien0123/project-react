import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Root = () => {
  return (
    <>
      <Box margin={"auto"} maxW={"1220px"}>
        <Header />
      </Box>

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
