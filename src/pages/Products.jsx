import { Box, Container, Heading, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$299.99", description: "A brief description of Product 1.", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: "$199.99", description: "A brief description of Product 2.", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$99.99", description: "A brief description of Product 3.", image: "/images/product3.jpg" },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Products
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                {product.price}
              </Text>
              <Text mb={4}>
                {product.description}
              </Text>
              <Button as={RouterLink} to={`/products/${product.id}`} colorScheme="teal">
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;