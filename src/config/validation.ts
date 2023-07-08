import { object, string } from 'yup';

export const userFormValidationScheme = object({
  name: string().required('Name is required'),
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});
