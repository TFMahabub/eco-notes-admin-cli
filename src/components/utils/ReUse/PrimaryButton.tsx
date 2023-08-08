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
      className="text-base h-9 flex items-center justify-center text-secondary rounded-md bg-blue px-6"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
