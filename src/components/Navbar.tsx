import { Anchor, Badge, Box, Container, Flex, IconButton } from "@hope-ui/solid";
import { IoCart } from "solid-icons/io";
import { Link } from "solid-app-router";

const NavBar = () => {
  return (
    <Box py="$3" shadow="$sm" backgroundColor="white" position="sticky" top="0">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap="$5">
            <Anchor as={Link} href="/">
              Home
            </Anchor>
            <Anchor as={Link} href="/store">
              Store
            </Anchor>
            <Anchor as={Link} href="/about">
              About
            </Anchor>
          </Flex>
          <Box position="relative">
            <IconButton aria-label="Cart" icon={<IoCart />} colorScheme="info" compact />
            <Badge
              variant="solid"
              colorScheme="danger"
              position="absolute"
              top="0"
              right="0"
              transform="translate(25%, -25%)"
            >
              4
            </Badge>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
