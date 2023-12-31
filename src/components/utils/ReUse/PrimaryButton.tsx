/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

function PrimaryButton({ children, ...attribute }: PropsType) {
  return (
    <button
      {...attribute}
      className="flex items-center justify-center px-6 text-base rounded-md h-9 text-secondary bg-blue disabled:bg-blue/70"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
