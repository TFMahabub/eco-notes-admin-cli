/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../../app/hook';
import ButtonDelete from '../../../components/utils/ReUse/ButtonDelete';
import ButtonEdit from '../../../components/utils/ReUse/ButtonEdit';
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
      <ButtonDelete
        onClick={() => handleDelete(tagID)}
      />
      <ButtonEdit
        onClick={() => (
          dispatch(
            setModalOpen(
              { modalType: 'tag-edit' },
            ),
          )
        )}
      />
    </>
  );
}

export default ActionButtons;
