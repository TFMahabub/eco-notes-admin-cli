/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { RiEditBoxLine } from 'react-icons/ri';

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonEdit({ ...attribute }: PropsType) {
  return (
    <button
      title="Edit"
      {...attribute}
      className="flex items-center justify-center text-md h-8 w-8 rounded-md text-orenge bg-orenge/10 cursor-pointer hover:bg-orenge/20"
    >
      <RiEditBoxLine
        className="text-xl"
      />
    </button>
  );
}
