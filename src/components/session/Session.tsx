import React from 'react';
import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

export const Session = () => (
    <Flex
        as="section"
        justify="space-between"
        wrap="wrap"
        w='784px'
        h='489px'
        bg={'#050407'}
        color={"#FFFFFF"}
        position='absolute'
        mt='52px'
        borderRadius="6px"

    >
        <Box w='435px' h='46px' >
            <Text ml='50px' mt='42px' fontSize='24px'>Сессия №1 - тут будет полное название </Text>
            <Text ml='50px' fontSize='14px' mt='3px'>Котировочная сессия 98989</Text>
            <Text ml='50px' mt='33px' w='64px' h='17px' fontSize='14px'>Заказчик</Text>
            <Text ml='50px' fontSize='20px'>Государственное учреждение такое-то</Text>
            <Text ml='50px' mt='13px' fontSize='14px'>С 15.04.2022 по 18.04.2022 14:22 (МСК)</Text>
            <Button
                h="27px"
                ml='42px'
                mt='157px'
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
        <Box>
            <Text mt='52px' mr='105px' fontSize='14px'>До окончания сессии</Text>
            <Box mt='8px' w='222px' h='82px' mr='27'
                 borderRadius="4px"
                 border='1px'
                 borderColor='#3047FE'
                 bg='#050407'
            >
                <Text ml='22px' align='center' w='178px' h='62px' fontFamily='Bebas Neue' fontSize='44px'>04:52:02</Text>
                <Grid templateColumns='1fr 1fr 1fr'
                      ml='22px'
                >
                    <Text ml='5px' align='center' fontSize='10px'>Часы</Text>
                    <Text ml='10px' fontSize='10px'>Минуты</Text>
                    <Text mr='32px' fontSize='10px'>Секунды</Text>
                </Grid>
            </Box>
            <Text mt='52px' mr='105px' fontSize='14px'>Текущая цена</Text>
            <Box mt='4px' w='222px' h='39px' mr='27'
                 borderRadius="4px"
                 border='1px'
                 borderColor='#3047FE'
                 bg='#050407'

            >
                <Flex justify="center" >
                    <Text fontSize='24px'
                          align='center'
                    >
                        14 120.20
                    </Text>
                    <Box mt='5px' color='#3047FE' h='24px'>
                        <CurrencyRubleIcon/>
                    </Box>
                </Flex>
            </Box>
            <Flex
                as="div"
                justify="space-between"
                wrap="wrap"
                w='349'
            >
                <Box mt='20px' mr='105px'>
                    <Flex>
                        <Text fontSize='14px'>15 000</Text>
                        <Box color='#3047FE' fontSize='small'>
                            <CurrencyRubleIcon/>
                        </Box>
                    </Flex>
                </Box>
                <Box mt='20px' mr='27'>
                    <Flex>
                        <Text fontSize='14px'>5</Text>
                        <Box color='#3047FE' fontSize='small'>
                            <CurrencyRubleIcon/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <Button
                    h="37px"
                    w='222px'
                    mr='27px'
                    mt='24px'
                    borderRadius="4px"
                    bg={'#3047FE'}
                    _focus={{ bg: "white.700" }}
                    _active={{ bg: "blue" }}
                    _hover={{
                        bg: 'blue.500',
                    }}
                >
                    <Text fontSize="14px">Поставить ставку</Text>
                </Button>
            </Box>
            <Box>
                <Button
                    h="44px"
                    w='222px'
                    mr='27px'
                    mt='13px'
                    borderRadius="4px"
                    border='1px'
                    borderColor='#3047FE'
                    bg={'#050407'}
                    _focus={{ bg: "white.700" }}
                    _active={{ bg: "blue" }}
                    _hover={{
                        bg: '#3047FE',
                        border: 'none',
                    }}
                >
                    <Text align='center' mr='11px' ml='20px' mt='5px' mb='5px' w='191px' h='34px' fontSize="14px">
                        Запустить в <br/> автоматическом режиме
                    </Text>
                </Button>
            </Box>
        </Box>
    </Flex>
)