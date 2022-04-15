import React, { useEffect } from 'react';
import {
    Flex,
    Box,
    HStack,
    Stack,
    Button,
    Heading,
    Text,
    chakra, Fade, Link,
} from '@chakra-ui/react';
import { Path } from '../../../core/router/paths';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { RegistrationFormValues } from '../types';
import { TextInput } from '../../../components/input/TextInput';
import { filterSynagogues, useBackgroundColor } from '../utils';
import authStore from '../../../store/auth';
import { observer } from 'mobx-react-lite';
import { successToast } from '../../../components/alerts/success';
import { errorToast } from '../../../components/alerts/fail';
import {ProjectDescription} from "../../../components/projectDescription";
import {BackgroundImages} from "../../../components/bg/BgImages";

const wikiSynagogueUrl = 'https://en.wikipedia.org/wiki/Synagogue';

export const RegistrationPage = observer(() => {
  const { isLoading, synagogues } = authStore;
  const bg1 = '#050407';
  const [isClearSelectField, setIsClearSelectField] = useState(false);

  return (
      <Formik<RegistrationFormValues>
        enableReinitialize
        initialValues={{
          email: ''
        }}
        onSubmit={(values, formikHelpers) => {
            console.log(values)
          // const selectedId = filterSynagogues(values.synagogue, synagogues);
          // authStore.saveMember(values, selectedId).then((res) => {
          //   console.log(res, 'res');
          //   return res?.status === 200 ? successToast(res.data) : errorToast('Oops, please, try again!');
          // });
          //
          // formikHelpers.resetForm();
          // setIsClearSelectField(true);
        }}
      >
        {({ isSubmitting, dirty, isValid, values }) => (

            <Flex
                bg={bg1}
                w="100%"
                h={'100vh'}
                align={'center'}
                justify={'center'}
                userSelect={'none'}
            >
                <Flex w="40%" h="74%" color="#fff" justifyContent="center" pl="63px" pr="63px" alignItems="flex-start" flexDir="column" marginTop="100px">
                    <Stack mx={'auto'} maxW={'lg'} w="450px">

                        <Text w={'229px'} h="38px" fontSize={'32px'} lineHeight="38px" fontWeight="400">
                            Регистрация
                        </Text>
                        <Form id="registration-page-form" style={{ marginTop: '26px' }}>
                            <Box
                                rounded={'lg'}
                                boxShadow={'lg'}
                                width="315px"
                            >
                                <Stack spacing={3}>
                                    <TextInput
                                        autoComplete="on"
                                        name='email'
                                        label='E-mail'
                                    />
                                    <TextInput
                                        autoComplete="on"
                                        name='email'
                                        label='Название компании'
                                    />
                                    <TextInput
                                        autoComplete="on"
                                        name='password'
                                        label='Пароль'
                                    />
                                    <Stack spacing={4}>
                                        <Button
                                            w="315px"
                                            type="submit"
                                            form="registration-page-form"
                                            loadingText="Submitting"
                                            size="lg"
                                            bg={'#3047FE'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            mt="22px"
                                        >
                                            Отправить письмо
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Form>
                    </Stack>
                    <Flex alignItems="flex-end">
                        <Text align={'start'} marginTop="70px">
                            Уже есть аккаунт? <RouterLink to={Path.LOGIN}>
                            <chakra.span color='#4299E1' _hover={{ textDecoration: 'underline' }}>
                                Войти
                            </chakra.span>
                        </RouterLink>
                        </Text>
                    </Flex>
                </Flex>
                <Flex h="100%" fontWeight="400" position="relative" w="60%">
                    <BackgroundImages />
                    <Flex w="100%" h="100%" position="relative">
                        <ProjectDescription desc={'Здесь будет описание проекта и идеи'} linkText={'Узнать больше'}/>
                    </Flex>
                </Flex>
            </Flex>
        )}
      </Formik>
  );
})