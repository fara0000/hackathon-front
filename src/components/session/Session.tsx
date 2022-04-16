import React from 'react';
import { Box, Text, Button, Flex } from "@chakra-ui/react";

export const Session = () => (
    <Flex
        as="section"
        justify="space-between"
        wrap="wrap"
        w='784px'
        h='469px'
        bg={'#050407'}
        mt='52px'
        color={"#FFFFFF"}
        position='absolute'
        pt='42px'

    >
        <Box w='435px' h='46px' ml='50px'>
            <Text fontSize='24px'>Сессия №1 - тут будет полное название </Text>
            <Text fontSize='14px' mt='9px'>Котировочная сессия 98989</Text>
        </Box>
        <Box w='222px' h='82px' mr='27'
             borderRadius="1px"
             borderColor='#3047FE'
             bg='#050407'
        >
            Timer
        </Box>
        <Box>
            <Text>Заказчик</Text>
        </Box>
        <Box>
            <Text mt='6px'>До окончания сессии</Text>
        </Box>
        <Text>Государственное учреждение такое-то</Text>
        <Box>

        </Box>
    </Flex>
)