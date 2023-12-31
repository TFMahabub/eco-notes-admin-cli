/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonDelete({ ...attribute }: PropsType) {
  return (
    <button
      title="Delete"
      {...attribute}
      className="flex items-center justify-center text-md h-8 w-8 rounded-md text-error bg-error/10 cursor-pointer hover:bg-error/20"
    >
      <RiDeleteBinLine
        className="text-xl"
      />
    </button>
  );
}
