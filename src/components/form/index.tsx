import React, { FormEvent, useState } from 'react';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { strings } from '../../constants';
import { Formik, FormikComputedProps, FormikFormProps } from 'formik';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    return null;
  };

  const handleSurnameChange = (e: FormEvent<HTMLInputElement>) => {
    return null;
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Checkbox:', isChecked);
  };

  return (
    <Formik
      initialValues={{ email: '', name: '' }}
      validate={(values) => {
        const errors = { email: '', name: '' };
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className='flex w-full justify-center  items-center h-screen'>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex w-full items-start sm:items-end justify-between bg-[#fff] rounded-lg py-6 px-8 shadow-lg flex-col sm:flex-row'>
              <div>
                <p className='text-lg font-extrabold'>{strings.beInformed}</p>
                <p className='text-sm '>{strings.dropDeets}</p>
              </div>
              <div className='mt-4 sm:mx-2 w-full sm:w-[200px]'>
                <div className='mb-4'>
                  <Input
                    id='name'
                    type='text'
                    placeholder={strings.name}
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <Input
                    id='email'
                    type='text'
                    placeholder={strings.email}
                    value={surname}
                    onChange={handleSurnameChange}
                  />
                </div>
              </div>
              <div className='my-4'>
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  label={strings.countMeIn}
                />
                <div className='mt-2' />
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  label={strings.forNews}
                />
              </div>
              <button
                className='bg-[#51B1B3] h-[42px] self-end hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'
                type='submit'
                disabled={!isChecked}
                onClick={() => {
                  return null;
                }}
              >
                Sign me up
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
