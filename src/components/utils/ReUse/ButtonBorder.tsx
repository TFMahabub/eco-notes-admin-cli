/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

function ButtonBorder({ children, ...attribute }: PropsType) {
  return (
    <button
      {...attribute}
      className="px-3 text-base duration-150 border rounded-md flex-center h-9 text-textColor hover:bg-textColor/10 border-borderColor"
    >
      {children}
    </button>
  );
}

export default ButtonBorder;
