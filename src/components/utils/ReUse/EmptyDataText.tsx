/* eslint-disable react/require-default-props */
import { EMPTYDATATEXT } from '../../GlobalTextVariable/GlobalText';

function EmptyDataText({ message = EMPTYDATATEXT }:{ message?: string; }) {
  return (
    <p className="text-center text-error">{message}</p>
  );
}

export default EmptyDataText;
