import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure, Icon,
  chakra, MenuList, MenuItem, Menu, MenuButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavigationLink } from '../navigationLink/NavigationLink';
import { Path } from '../../core/router/paths';
import { observer } from 'mobx-react-lite';
import authStore from '../../store/auth';
import { FaUserAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export const PageHeader = observer(() => {
  const { user } = authStore;
  const name = localStorage.getItem('name')
  const role = localStorage.getItem('role')
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const logOut = () => {
    authStore.deleteTokenFromLocalStorage();
    history.push('login');
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      h="64px"
      bg="#050407"
      color="#FFFFFF"
    >

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        fontSize="16px"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NavigationLink ml="49px" to={Path.MAIN} text="Главная" activeStyle={{ borderBottom: '1px solid #fff'}}/>
        <NavigationLink ml="42px" to={Path.LIBRARY} text="Котировочные сессии" activeStyle={{ borderBottom: '1px solid #fff'}}/>
        <NavigationLink  ml="42px" to={Path.EVENT} text="Поддержка" activeStyle={{ borderBottom: '1px solid #fff'}}/>
      </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
          d={'flex'}
          flexDir="row"
        >
          <Button
              h="27px"
              borderRadius="4px"
              w="68px"
              mr="17px"
              bg={'#050407'}
              border='1px'
              borderColor='#3047FE'
              _hover={{
                bg: '#3047FE',
                border: 'none',
              }}
          >
            <Text fontSize="14px">Войти</Text>
          </Button>
          <Button
              h="27px"
              mr="18px"
              borderRadius="4px"
              bg={'#3047FE'}
              _focus={{ bg: "white.700" }}
              _active={{ bg: "blue" }}
              _hover={{
              bg: 'blue.500',
            }}
          >
            <Text fontSize="14px">Зарегистрироваться</Text>
          </Button>
        </Box>
    </Flex>
)});