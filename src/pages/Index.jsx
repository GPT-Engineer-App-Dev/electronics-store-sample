import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to E-Shop
          </Heading>
          <Text fontSize="lg" mb={6}>
            Your one-stop shop for all your electronic needs.
          </Text>
          <Button as={RouterLink} to="/products" colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </Box>
        <Heading as="h2" size="xl" mb={4}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Product 1
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                $299.99
              </Text>
              <Text mb={4}>
                A brief description of Product 1.
              </Text>
              <Button as={RouterLink} to="/products/1" colorScheme="teal">
                View Details
              </Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Product 2
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                $199.99
              </Text>
              <Text mb={4}>
                A brief description of Product 2.
              </Text>
              <Button as={RouterLink} to="/products/2" colorScheme="teal">
                View Details
              </Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Product 3
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                $99.99
              </Text>
              <Text mb={4}>
                A brief description of Product 3.
              </Text>
              <Button as={RouterLink} to="/products/3" colorScheme="teal">
                View Details
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;