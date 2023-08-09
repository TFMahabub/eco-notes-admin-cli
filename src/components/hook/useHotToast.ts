import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface PropsType {
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  itemName: string
}

const useHotToast = ({
  isLoading, isSuccess, error, itemName,
}:PropsType) => {
  useEffect(() => {
    if (isLoading) toast.loading('processing...', { id: itemName });
    if (isSuccess) toast.success(`${itemName} delete successfully`, { id: itemName });
    if (error) toast.error('something went wrong :(', { id: itemName });
  }, [isLoading, isSuccess, error, itemName]);
};

export default useHotToast;
