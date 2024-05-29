import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id,
    name: `Product ${id}`,
    price: `$${id * 100}.99`,
    description: `A detailed description of Product ${id}.`,
    image: `/images/product${id}.jpg`,
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={6}>
        <Image src={product.image} alt={product.name} />
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="2xl" color="gray.600">
          {product.price}
        </Text>
        <Text>
          {product.description}
        </Text>
        <Button colorScheme="teal" size="lg">
          Add to Cart
        </Button>
      </VStack>
    </Container>
  );
};

export default ProductDetail;