import React, {useEffect, useState} from 'react';
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import {observer} from "mobx-react-lite";
import sessionStore from '../../store/session';
import {Session} from "../../components/sessions/Session";
import {PageHeader} from "../../components/header/PageHeader";

export const SessionsPage = observer(() => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        sessionStore.getSessionData(token).then(res => {
            setData(res);
        })
    }, [])

    console.log(sessionStore.sessionData)

    return (
        <>
            <header style={{ zIndex: 6 }}>
                <PageHeader />
            </header>
            <Flex
                h={'calc(100vh - 64px)'}
                bgImage="url('/assets/back.jpg')"
                bgPosition="center"
                backgroundRepeat="no-repeat"
                justify="center"
            >
                <Session/>
            </Flex>
        </>
    )
})