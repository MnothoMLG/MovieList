import React, { useEffect, useState } from 'react';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { strings } from '../../constants';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  SIGN_UP_LOADING_KEY,
  signUserUpRequest,
} from '../../store/auth/actions';
import { getAuthState } from '../../store/auth/selectors';
import { useLoading } from '../../hooks';
import { userFormValidationScheme } from '../../config/validation';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const { onBoarded } = useSelector(getAuthState);
  const [signMeUp, setSignMeUp] = useState(false);
  const loading = useLoading(SIGN_UP_LOADING_KEY);
  console.log({ onBoarded, loading });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (onBoarded) return null;

  return (
    <Formik
      initialValues={{ email: '', name: '' }}
      validationSchema={userFormValidationScheme}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
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
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange('name')}
                  />
                </div>
                <div>
                  <Input
                    id='email'
                    type='text'
                    placeholder={strings.email}
                    error={errors.email}
                    value={values.email}
                    onChange={handleChange('email')}
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
                  dispatch(signUserUpRequest({ ...values }));
                }}
              >
                {strings.signUp}
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
