import { Box, Grid, GridItem, Heading, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import AwesomeSlider from "react-awesome-slider";
import "../assets/css/home.css";
import Card from "../Component/Card";
const Home = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["produsts"],
    queryFn: () =>
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            throw new Error("Query data is undefined");
          }
          return data;
        }),
  });
  return (
    <>
      <Box as="section" position={"relative"} mt={3}>
        <AwesomeSlider animation="foldOutAnimation">
          <div data-src="public/slider1.webp" />
          <div data-src="public/slide2.webp" />
          <div data-src="public/slide3.webp" />
          <div data-src="public/slide4.webp" />
        </AwesomeSlider>
      </Box>

      <Box as="section" margin={"auto"} mt={"50px"}>
        <Box as="header">
          <Heading textAlign={"center"} mb={"50px"}>
            Feature Products
          </Heading>
        </Box>
        <Grid
          maxW={"1220px"}
          m={"auto"}
          templateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}
          rowGap={6}
          columnGap={8}
        >
          {isPending && (
            <>
              <div className="loader"></div>
            </>
          )}
          {isLoading
            ? Array(4)
                .fill(null)
                .map((i, index) => <Skeleton key={index}></Skeleton>)
            : data.map((product: any) => (
                <GridItem key={product.id}>
                  <Card product={product} />
                </GridItem>
              ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
