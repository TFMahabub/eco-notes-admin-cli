/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { InputHTMLAttributes } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  lable: string
  register: any;
  errorCondition?: object | undefined
  maxLengthText?: string;
  minLengthText?: string;
  error: any
}

function PrimaryInput({
  name, id, lable, register, error, errorCondition, maxLengthText, minLengthText, ...rest
}:PropsType) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-sm">
      {lable}
      <input
        id={id}
        name={name}
        ref={register}
        {...register(name, errorCondition)}
        {...rest}
        className="text-base text-textColor placeholder:text-textColor py-[6px] px-4 focus:outline-none outline-none ring-0 border border-textColor/40 rounded-md focus:border-blue"
      />
      {error[name] && (
      <small className="text-error flex items-center gap-[2px]">
        {error[name].type === 'maxLength' && maxLengthText}
        {error[name].type === 'minLength' && minLengthText}
        {error[name].type === 'required' && `${lable} is required`}
        <RiErrorWarningLine />
      </small>
      )}
    </label>
  );
}

export default PrimaryInput;
