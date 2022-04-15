import React, { FC, useState } from 'react';
import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  chakra,
} from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Path } from '../../../core/router/paths';
import { LoginFormInitialValues, UserType } from '../types';
import { Form, Formik, FormikHelpers } from 'formik';
import { TextInput } from '../../../components/input/TextInput';
import { useBackgroundColor } from '../utils';
import authStore from '../../../store/auth';
// import { loginUserApi } from '../../../api/auth/api';
import { errorToast } from '../../../components/alerts/fail';
import { observer } from 'mobx-react-lite';

const wikiSynagogueUrl = 'https://en.wikipedia.org/wiki/Synagogue';

// TODO: use yup object for validate input because stars is not a good choice in Login Page

export const LoginPage: FC = observer(() => {
  const bg1 = '#050407';
  const bg2 = useBackgroundColor('white', 'gray.700');
  const history = useHistory();

  // const signIn = (values: LoginFormInitialValues, helpers:  FormikHelpers<LoginFormInitialValues>) => {
  //   if(values.login && values.password) {
  //     loginUserApi(values).then((res) => {
  //       helpers.resetForm();
  //       if(res?.status === 200) {
  //         authStore.setUser(res.data.member);
  //         authStore.setTokenToLocalStorage(res.data.userToken, res.data.member);
  //         history.push('/main')
  //       } else {
  //         errorToast('Wrong user data, please try again!');
  //       }
  //     });
  //   } else {
  //     errorToast('Please, enter all needed fields!');
  //   }
  // }

  return (
    <Formik<LoginFormInitialValues>
      enableReinitialize
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={(values, formikHelpers) => {
        console.log(values)
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
          <Flex w="40%" h="100%" color="#fff" justifyContent="flex-start" pl="63px" pr="63px" alignItems="center">
            <Stack spacing={8} mx={'auto'} maxW={'lg'} w="450px">

              <Text w={'229px'} h="38px" fontSize={'32px'} lineHeight="38px" fontWeight="400">Вход в систему</Text>
              <Form id="login-page-form" style={{ marginTop: '26px' }}>
                <Box
                    rounded={'lg'}
                    boxShadow={'lg'}
                >
                  <Stack spacing={4}>
                    <TextInput
                        autoComplete="on"
                        name='login'
                        label='Почта'
                    />
                    <TextInput
                        autoComplete="on"
                        name='password'
                        label='Пароль'
                    />
                    <Stack spacing={4}>
                      <Stack
                          direction={{ base: 'column', sm: 'row' }}
                          align={'start'}
                          justify={'space-between'}>
                        <Link color={'blue.400'}>Восстановить пароль</Link>
                      </Stack>
                      <Button
                          type="submit"
                          form="login-page-form"
                          loadingText="Submitting"
                          size="lg"
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                          }}
                      >
                        Войти
                      </Button>
                    </Stack>
                    <Stack>
                      <Text align={'center'}>
                        Нет аккаунта? <RouterLink to={Path.REGISTER}>
                        <chakra.span color='#4299E1' _hover={{ textDecoration: 'underline' }}>
                          Регистрация
                        </chakra.span>
                      </RouterLink>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Form>
            </Stack>
          </Flex>
          <Flex alignItems="center" justifyContent="center" flexDir="column" fontSize={'24px'} color={'#fff'} w="60%" bg={'gray'} h="100%" fontWeight="400">
            <Text>
              Здесь будет описание проекта и идеи
            </Text>
            <Link href={wikiSynagogueUrl} target="_blank" fontSize="12px" color='#4299E1' _hover={{ textDecoration: 'underline' }}>Узнать больше</Link>
          </Flex>
        </Flex>
      )}
    </Formik>
  )}
)
