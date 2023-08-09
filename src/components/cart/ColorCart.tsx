/* eslint-disable no-underscore-dangle */
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { useDeleteSingleTagColorMutation } from '../../feauters/Tags/tagColorApi';
import useHotToast from '../hook/useHotToast';
import { TAGCOLORTYPE } from '../types/tagColorType';
import { LoadingSpinner } from '../utils/ReUse/LoadingSpinner';

function ColorCart({ color }:{ color:TAGCOLORTYPE }) {
  const [deleteTagColor, { isLoading, error, isSuccess }] = useDeleteSingleTagColorMutation();

  const dispatch = useDispatch<any>();
  useHotToast({
    isLoading, isSuccess, error, itemName: 'Color',
  });

  return (
    <div
      className="relative flex flex-wrap items-center justify-center w-full h-16 gap-2 transition-all transform rounded-md group duration-common text-secondary"
      style={{ backgroundColor: `${color?.color?.bg}` }}
    >
      {
        isLoading
          ? (
            <LoadingSpinner
              className="text-3xl fill-secondary"
            />
          )
          : (
            <button
              onClick={() => dispatch(
                deleteTagColor(color?._id),
              )}
              type="button"
              title="Delete"
              className="absolute hidden p-1 rounded-sm top-2 bg-secondary/20 right-2 group-hover:block"
            >
              <RxCross2
                className="text-lg duration-200 hover:scale-125"
              />
            </button>
          )
        }
    </div>
  );
}

export default ColorCart;
