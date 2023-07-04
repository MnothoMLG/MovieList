import React, { FormEvent, useState } from 'react';
import { Input } from '../input';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {

  };

  const handleSurnameChange = (e: FormEvent<HTMLInputElement> ) => {

  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Checkbox:', isChecked);
  };

  return (
    <div className="flex w-full justify-center  items-center h-screen">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className='flex w-full items-end justify-between bg-[#fff] rounded-lg py-6 px-8 shadow-lg flex-row'>
          <div>
          <p className='text-lg font-extrabold'>
          {"Be informed \n when we launch"}
          </p>
          <p className='text-sm '>
            {"Drop your deets and we'll give you a buzz."}
          </p>
          </div>
        <div className='mx-2' >
          <div className="mb-4">
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <Input
              id="email"
              type="text"
              placeholder="Email address"
              value={surname}
              onChange={handleSurnameChange}
            />
          </div>
        </div>
        <div>
          <label className="flex items-center">
            <input
              className="form-checkbox h-4 w-4 text-indigo-600"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-gray-700 text-sm">I agree to the terms and conditions</span>
          </label>
          <label className="flex items-center">
            <input
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:gray-500 dark:focus:gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2  text-gray-700 text-sm">I agree to the terms and conditions</span>
          </label>
        </div>
        <button
            className="bg-[#51B1B3] h-[42px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!isChecked}
          >
            Sign me up
          </button>
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;
