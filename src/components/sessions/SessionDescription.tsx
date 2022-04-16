import React from 'react';
import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";

export const SessionDescription = () => (
    <Flex
        as="section"
        justify="space-between"
        wrap="wrap"
        w='784px'
        h='132px'
        bg={'#050407'}
        color={"#FFFFFF"}
        position='absolute'
        mt='52px'
        borderRadius="6px"
    >
        <Box w='392px' ml='23px' >
            <Text mt='21px' fontSize='20px'>Сессия №1</Text>
            <Text fontSize='14px' mt='2px'>Описание учреждения, объявившего сессию</Text>
            <Flex
                justify="center"
            >
                <Box>

                </Box>
                <Text mt='21px' w='392px' h='17px' fontSize='14px'>С 15.04.2022 по 18.04.2022 14:22 (МСК)</Text>
            </Flex>
        </Box>
        <Box mr='14px'>
            <Flex
                justify="center"
            >
                <Text mt='26px' mr='15px' fontSize='14px'>Котировочная сессия 98989</Text>
                <Box
                    borderRadius="4px"
                    border='1px'
                    borderColor='#3047FE'
                    bg={'#050407'}
                    h='24px'
                    w='108px'
                    mt='24px'
                >
                    <Flex
                        justify="center"
                    >
                        <Box>

                        </Box>
                        <Text w='65px' h='17px' fontSize='14px'>Активная</Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex
                justify='right'
                mt='46px'
            >
                <Box>

                </Box>
                <Text align='right' w='148px' h='17px' fontSize='14px'>г. Санкт-Петербург</Text>
            </Flex>
        </Box>
    </Flex>
)