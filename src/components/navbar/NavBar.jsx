import React from 'react'
import CartWidget from '../CartWidget'
import './navbar.css'
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";

const NavBar = ({id}) => {


  return (
    <>
    <div className='navbar' key={id}>
      <Container className='cont-nav' maxW="200rem" color="#262626">
          <Flex alignItems="center" gap="1">
            <Link to={"/"}><Avatar size="x1" src="/assets/logo.jpg"/></Link>
            <Box p="10" w="200px" h="100">
              <Heading size="md">
                <Link to={"/"}>Home</Link>
              </Heading>
            </Box>
            <Box p="10" w="200px" h="100">
              <Heading size="md">
                <Link to={"/about"}>About</Link>
              </Heading>
            </Box>
            <Spacer />
              <Box>
                  <Heading className='menubtn' size="md" variant="outline"
                    colorScheme="#262626" m="1">
                      <Link to={"/menu/:menu"}>Menu</Link>
                  </Heading>
                  </Box>
              <Box>
                <Menu>
                  <MenuButton className='menubtn'
                    as={Button}
                    size="lg"
                    variant="outline"
                    colorScheme=""
                    rightIcon={<ChevronDownIcon />}
                    m="5">
                    Categorias
                  </MenuButton>
                  <MenuList className="menu-list">
                    <Link to={`/category/${"Pasteles"}`}>
                      <MenuItem>Pasteles</MenuItem>
                    </Link>
                    <Link to={`/category/${"Muffins"}`}>
                      <MenuItem>Muffins</MenuItem>
                    </Link>
                    <Link to={`/category/${"Festivos"}`}>
                      <MenuItem>Festivos</MenuItem>
                    </Link>
                    <Link to={`/category/${"Personalizados"}`}>
                      <MenuItem>Personalizados</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </Box>
            <Box p="10" w="300px" h="100">
              <Heading size="md">
                <Link to={"/contact"}>Contacto</Link>
              </Heading>
            </Box>
            <Spacer />
            <Box p="10" w="300px" h="100">
                <CartWidget />
            </Box>
          </Flex>
      </Container>
    </div>
   </>
    )
}

export default NavBar