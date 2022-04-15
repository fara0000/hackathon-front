export interface RegistrationFormValues {
  email: string;
  companyName: string;
  password: string;
}

export interface LoginFormInitialValues {
  email: string;
  password: string;
}

export type UserType = {
  id: number;
  name: string;
  surname: string;
  role: string;
}