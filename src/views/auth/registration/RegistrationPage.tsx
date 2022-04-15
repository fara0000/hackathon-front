import React, { useEffect } from 'react';
import {
  Flex,
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  chakra, Fade,
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

// TODO: clear select fields after submit

export const RegistrationPage = observer(() => {
  const { isLoading, synagogues } = authStore;
  const [isClearSelectField, setIsClearSelectField] = useState(false);

  return (
      <Formik<RegistrationFormValues>
        enableReinitialize
        initialValues={{
          name: '',
          surname: '',
          login: '',
          password: '',
          role:'',
          synagogue: '',
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
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useBackgroundColor('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} pb="40px" px={6}>
            <Stack align={'center'} mb="8px">
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
            </Stack>
            <Form id="registration-page-form" style={{ margin: 0 }}>
              <Box
                rounded={'lg'}
                bg={useBackgroundColor('white', 'gray.700')}
                boxShadow={'lg'}
                p="25px 26px"
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <TextInput
                        autoComplete="on"
                        isRequired
                        name='name'
                        label='First Name'
                      />
                    </Box>
                    <Box>
                     <TextInput
                      autoComplete="on"
                      name='surname'
                      label='Last Name'
                     />
                    </Box>
                  </HStack>
                  <TextInput
                    autoComplete="on"
                    isRequired
                    name='login'
                    label='Login'
                  />
                  <TextInput
                    isRequired
                    autoComplete="on"
                    name='password'
                    type='password'
                    label='Password'
                  />
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      form="registration-page-form"
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack>
                    <Text align={'center'}>
                      Already a user? <RouterLink to={Path.LOGIN}>
                      <chakra.span color='#4299E1' _hover={{ textDecoration: 'underline' }}>
                        Login
                      </chakra.span>
                    </RouterLink>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Form>
          </Stack>
        </Flex>
        )}
      </Formik>
  );
})