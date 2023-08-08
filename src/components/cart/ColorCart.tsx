import { RiAddFill, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../feauters/modal/modalSlice';
import { TAGCOLORTYPE } from '../types/tagColorType';

function ColorCart({ color }:{ color:TAGCOLORTYPE }) {
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-wrap items-center justify-center w-full h-16 gap-2 transition-all transform rounded-md bg-green group duration-common text-secondary"
    >
      <button type="button" className="hidden group-hover:block">
        <RiDeleteBinLine
          className="text-xl duration-100 hover:scale-110"
        />
      </button>
      <button type="button" className="hidden group-hover:block">
        <RiEditBoxLine
          className="text-xl duration-100 hover:scale-110"
        />
      </button>
      <button
        onClick={() => dispatch(setModalOpen({ modalType: 'tag-color-add' }))}
        type="button"
        className="hidden group-hover:block"
      >
        <RiAddFill
          className="text-2xl duration-100 hover:scale-110"
        />
      </button>
    </div>
  );
}

export default ColorCart;
