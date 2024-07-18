import { ReactNode } from "react";



import { Box, Container, Flex, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";


const links = [
  {
    label: "SVG Zone",
    href: "https://www.svg.zone/",
    icon: "https://www.svg.zone/favicon.svg",
  },
  {
    label: "Source",
    href: "https://github.com/VectorLogoZone/svgview",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    label: "Integration",
    href: "https://github.com/VectorLogoZone/svgview#integration",
    icon: "/images/emoji_u1f6e0.svg",
  },
  {
    label: "Contact",
    href: "https://andrew.marcuse.info/contact.html",
    icon: "https://mvi.marcuse.info/images/contact.svg",
  },
];

export const Footer = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.400", "gray.300");
  //const borderColor=useColorModeValue("gray.200", "gray.900");

  return (
    <Stack width="100%" justifyContent="center" bg={bg} py={3} direction="row" spacing={4}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} style={{opacity: "0.75"}}>
          <Flex align="center">
            <Box boxSize={6} mr={1}>
              <img src={link.icon} alt={link.label} style={ {height:"1.25em" } } />
            </Box>
            <Text>{link.label}</Text>
          </Flex>
        </Link>
      ))}
    </Stack>
  );
};