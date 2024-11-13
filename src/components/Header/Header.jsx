"use client";
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from "@chakra-ui/react";
import { FaGlobe, FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginModal from "@/components/LoginModal/LoginModal.jsx";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box as="header" width="100%" paddingY="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1280px"
          mx="auto"
          paddingX={{ base: "10px", md: "40px" }}
        >
          {/* LEFT SECTION */}
          <HStack spacing={6}>
            <Link href="/Pages/Women">
              <Text>Women</Text>
            </Link>
            <Link href="/Pages/Men">
              <Text>Men</Text>
            </Link>
            <Link href="/Pages/Kids">
              <Text>Kids</Text>
            </Link>
          </HStack>

          {/* CENTER LOGO */}
          <Link href="/">
            <Image
              src="/assets/urbanedge_logo.png"
              alt="urban_logo"
              boxSize="160px"
              height="auto"
              objectFit="contain"
            />
          </Link>

          {/* RIGHT SECTION */}
          <HStack spacing={5}>
            <Tooltip
              label="Language & Region"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Link href="">
                <Icon as={FaGlobe} boxSize={4} />
              </Link>
            </Tooltip>
            <Tooltip
              label="Profile"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Button
                onClick={onOpen}
                variant="ghost"
                _hover={{ bg: "none" }}
                padding="0"
                minWidth="auto"
              >
                <Icon as={FaRegUser} boxSize={4} />
              </Button>
            </Tooltip>
            <Tooltip
              label="Wishlist"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Link href="/Pages/Wishlist">
                <Icon as={FaRegHeart} boxSize={4} />
              </Link>
            </Tooltip>
            <Tooltip label="Cart" hasArrow placement="bottom" openDelay={400}>
              <Link href="/Pages/Cart">
                <Icon as={AiOutlineShoppingCart} boxSize={5} />
              </Link>
            </Tooltip>
          </HStack>
        </Box>
        <Divider></Divider>
        {/* SEARCH INPUT */}
        <Box
          display="flex"
          justifyContent="flex-end"
          maxWidth="1280px"
          mx="auto"
          paddingX={{ base: "10px", md: "40px" }}
          mt="10px"
        >
          <InputGroup width="260px" /* Adjust width as needed */>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              borderColor="gray.300"
              focusBorderColor="black"
              _placeholder={{ color: "gray.500" }}
              borderRadius="md"
            />
          </InputGroup>
        </Box>

        {/* LOGINMODAL COMPONENT */}
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
