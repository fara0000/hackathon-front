import {Flex, Text} from "@chakra-ui/react";
import React, {FC} from "react";
import {AllBets, PriorityBets} from "../AutoBets";
import {autoSessionsType} from "../../../../../types";

export const AutoBetsItem: FC<autoSessionsType> = ({ sessionName, currentPrice, customerName }) => {
    return (
        <Flex border="1px solid #FFFFFF" w="548px" h="101px" borderRadius="6px" cursor="pointer" mt="9px">
            <Flex p="13px 0 9px 19px" h="100%" w="60%" flexDir="column">
                <Text fontSize='16px'>{sessionName}</Text>
                <Text fontSize='10px' mt='2px'>{customerName}</Text>
            </Flex>
            <Flex p="5px 7px 9px 0" h="100%" w="40%" alignItems="end" flexDir="column">
                <Flex flexDir="column" alignItems="end">
                    <Text fontSize='12px'>Текущая цена</Text>
                    <Flex fontSize="12px" w="103px" h="19px" border={'1px solid #3047FE'} justifyContent="center" alignItems="center" borderRadius="4px">
                        {currentPrice}
                    </Flex>
                </Flex>
                <Flex flexDir="column" alignItems="end" mt="14px">
                    <Text fontSize='12px'>До следующей ставки</Text>
                    <Flex fontSize="12px" w="103px" h="19px" border={'1px solid #3047FE'} justifyContent="center" alignItems="center" borderRadius="4px">
                        17 минут
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}