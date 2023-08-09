/* eslint-disable react/require-default-props */
import { ERRORTEXT } from '../../GlobalTextVariable/GlobalText';

function ErrorText({ message = ERRORTEXT }:{ message?: string; }) {
  return (
    <p className="text-center text-error">{message}</p>
  );
}

export default ErrorText;
