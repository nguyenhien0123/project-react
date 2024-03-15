import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box as={Link} to="/">
      <Image src="../../public/logo-shop-red.png" />
    </Box>
  );
};

export default Logo;
