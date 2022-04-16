import React from 'react';
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import {Session} from "../../components/session/Session";

export const SessionsPage = () => (
    <Flex
        h={'calc(100vh - 64px)'}
        bgImage="url('/assets/new_back.jpg')"
        bgPosition="center"
        backgroundRepeat="no-repeat"
        justify="center"
    >
        <Session/>
    </Flex>

)