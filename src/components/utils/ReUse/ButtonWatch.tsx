/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonWatch({ ...attribute }: PropsType) {
  return (
    <button
      title="Watch"
      {...attribute}
      className="flex items-center justify-center text-md h-8 w-8 rounded-md text-green bg-green/10 cursor-pointer hover:bg-green/20"
    >
      <HiOutlineEye
        className="text-xl"
      />
    </button>
  );
}
