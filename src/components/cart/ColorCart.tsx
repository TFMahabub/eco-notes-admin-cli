import { RiAddFill, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../feauters/modal/modalSlice';

function ColorCart() {
  const dispatch = useDispatch();
  return (
    <div
      className="h-16 w-full bg-green rounded-md flex flex-wrap items-center justify-center gap-2 group transition-all transform duration-common text-secondary"
    >
      <button type="button" className="hidden group-hover:block">
        <RiDeleteBinLine
          className="text-xl hover:scale-110 duration-100"
        />
      </button>
      <button type="button" className="hidden group-hover:block">
        <RiEditBoxLine
          className="text-xl hover:scale-110 duration-100"
        />
      </button>
      <button
        onClick={() => dispatch(setModalOpen({ modalType: 'tag-color-add' }))}
        type="button"
        className="hidden group-hover:block"
      >
        <RiAddFill
          className="text-2xl hover:scale-110 duration-100"
        />
      </button>
    </div>
  );
}

export default ColorCart;
