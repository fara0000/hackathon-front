import React, {FC} from 'react';
import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";
import {botSession, sessionsType} from "../../types";

export const SessionDescription : FC<sessionsType> = ({ id, status, sessionName, customerName, location, start, end, bet }) => (
    <Flex
        justify="space-between"
        w='784px'
        h='142px'
        bg={'#050407'}
        color={"#FFFFFF"}
        mt='42px'
        borderRadius="6px"
    >
        <Box w='392px' ml='23px' >
            <Text fontSize='20px'>{sessionName}</Text>
            <Text fontSize='14px' mt='2px'>{customerName}</Text>
            <Flex
                justify="center"
            >
                <Box>

                </Box>
                <Text w='392px' h='17px' fontSize='14px'>`${start}` по `${end}`</Text>
            </Flex>
        </Box>
        <Box mr='14px'>
            <Flex
                justify="center"
            >
                <Text mt='26px' mr='15px' fontSize='14px'>Котировочная сессия {id}</Text>
                <Box
                    borderRadius="4px"
                    border='1px'
                    borderColor='#3047FE'
                    bg={'#050407'}
                    h='24px'
                    w='108px'
                    mt='16px'
                >
                    <Flex
                        justify="center"
                    >
                        <Box>

                        </Box>
                        <Text w='65px' h='17px' fontSize='14px'>{status}</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex
                justify='right'
                mt='46px'
            >
                <Box>

                </Box>
                <Text align='right' w='148px' h='17px' fontSize='14px'>{location}</Text>
            </Flex>
        </Box>
    </Flex>
);