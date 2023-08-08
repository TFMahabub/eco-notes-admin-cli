import { RiListUnordered } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { setModalClose } from '../../feauters/modal/modalSlice';

function ModalHeader({ modalTitle }:{ modalTitle:string }) {
  const dispatch = useDispatch();
  return (
    <header className="h-16 flex items-center justify-between border-b border-textColor/20 px-8 bg-secondary">
      <div className="flex items-center gap-3">
        <RiListUnordered className="text-blue text-[34px] font-bold border border-textColor/40 p-[6px] rounded-[4px]" />
        <h2 className="text-2xl font-medium text-blue">{modalTitle}</h2>
      </div>
      <div>
        <button
          onClick={() => (
            dispatch(setModalClose())
          )}
          type="button"
        >
          <RxCross1 className="text-textColor text-[32px] font-bold border border-textColor/40 p-1 rounded-[4px] hover:bg-textColor/5 duration-common" />
        </button>
      </div>
    </header>
  );
}

export default ModalHeader;
