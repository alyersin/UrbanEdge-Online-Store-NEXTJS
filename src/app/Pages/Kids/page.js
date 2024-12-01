"use client";
import TermsBar from "@/components/TermsBar/TermsBar.jsx";
import BlackBar from "@/components/TermsBar/TermsBar.jsx";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Women() {
  return (
    <>
      <Box>
        <TermsBar
          items={[
            "FREE DELIVERY AND RETURNS",
            "30 DAYS RIGHT OF RETURN",
            "CASH ON DELIVERY",
          ]}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1280px"
        width="100%"
        mx="auto"
        textAlign="center"
        py={8}
      >
        <Heading mb={8}>Kids&apos;s Collection</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="100%">
          <Box border="1px solid gray" padding="4">
            <Text>Kids&apos;s Item 1</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Kids&apos;s Item 2</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Kids&apos;s Item 3</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
