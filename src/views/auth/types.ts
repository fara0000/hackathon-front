export interface RegistrationFormValues {
  login: string;
  companyName: string;
  password: string;
}

export interface LoginFormInitialValues {
  email: string;
  password: string;
}

export type JwtType = {
  authToken: string;
  accessToken: string;
}

export type AxiosResponse = {
  code: number | undefined;
  message: string | undefined;
}