import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Collapse,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { PiHouseBold } from "react-icons/pi";

import { useNavigate } from "shared/Router";

import { ToggleModeButton } from "../../Components/ToggleModeButton";
import { DesktopNav } from "./DesktopNav";
import { LoaderBar } from "./LoaderBar";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box w="100%" position="fixed" zIndex="10">
      <Flex
        w="100%"
        minH="60px"
        py={2}
        px={4}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        bg={bg}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton boxSize="1.5em" 
            onClick={() => { navigate("/"); }}
            icon={<PiHouseBold />}
            variant="ghost"
            aria-label="SVG View"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <HStack direction={"row"} spacing={4}>
           <ToggleModeButton />
        </HStack>
      </Flex>
      <LoaderBar />
    </Box>
  );
};

