/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { RiAddFill, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../../app/hook';
import { useDeleteSingleTagMutation } from '../../../feauters/Tags/TagsApi';
import { setModalOpen } from '../../../feauters/modal/modalSlice';

function ActionButtons({ tagID }:{ tagID:string }) {
  const [deleteTag, { isSuccess, isLoading, isError }] = useDeleteSingleTagMutation();
  const dispatch = useAppDispatch();

  const handleDelete = (ID:string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTag(ID);
      }
    });
  };

  useEffect(() => {
    if (isLoading) toast.loading('processing...', { id: 'changePassword' });
    if (isSuccess) toast.success('tag delete successfully', { id: 'changePassword' });
    if (isError) toast.error('something went wrong :(', { id: 'changePassword' });
  }, [isLoading, isSuccess, isError]);

  return (
    <>
      <button
        title="Delete"
        type="button"
        onClick={() => handleDelete(tagID)}
        className="flex items-center justify-center text-md h-8 w-8 rounded-md text-error bg-error/10 cursor-pointer hover:bg-error/20"
      >
        <RiDeleteBinLine
          className="text-xl"
        />
      </button>
      <button
        onClick={() => (
          dispatch(
            setModalOpen(
              { modalType: 'tag-edit' },
            ),
          )
        )}
        title="Edit"
        type="button"
        className="flex items-center justify-center text-md h-8 w-8 rounded-md text-orenge bg-orenge/10 cursor-pointer hover:bg-orenge/20"
      >
        <RiEditBoxLine
          className="text-xl"
        />
      </button>
      <button
        onClick={() => (
          dispatch(
            setModalOpen(
              { modalType: 'tag-post' },
            ),
          )
        )}
        title="Create"
        type="button"
        className="flex items-center justify-center text-md h-8 w-8 rounded-md text-green bg-green/10 cursor-pointer hover:bg-green/20"
      >
        <RiAddFill
          className="text-2xl"
        />
      </button>
    </>
  );
}

export default ActionButtons;
