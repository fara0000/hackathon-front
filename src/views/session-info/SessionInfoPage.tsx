import React from 'react';
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import {SessionDescription} from "../../components/sessions/SessionDescription";

export const SessionInfoPage = () => (
    <Flex
        h={'calc(100vh - 64px)'}
        bgImage="url('/assets/new_back.jpg')"
        bgPosition="center"
        backgroundRepeat="no-repeat"
        justify="center"
    >
        <SessionDescription/>
    </Flex>

)