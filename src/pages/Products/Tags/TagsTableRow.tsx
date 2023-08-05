/* eslint-disable no-underscore-dangle */
import { RiAddFill, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { useAppDispatch } from '../../../app/hook';
import { useTagsColor } from '../../../components/hook/useTagsColor';
import { TAGTYPE } from '../../../components/types/tagType';
import { setModalOpen } from '../../../feauters/modal/modalSlice';

function TagsTableRow({ tag }:{ tag:TAGTYPE }) {
  const dispatch = useAppDispatch();

  const tagColor = useTagsColor(tag?.tag);
  return (
    <tr
      id="tr"
      className="h-14 text-xs text-textColor bg-white even:bg-gray/5 hover:bg-gray-100 border-b border-gray/10 last-of-type:border-b-0"
    >
      <td className="pl-4">
        <div className="flex gap-2 items-center">
          <span
            title={tag?._id}
            className=" text-sm font-normal"
          >
            {tag?._id}
          </span>
        </div>
      </td>
      <td className="pl-24">
        <div className="flex gap-2 items-center">
          <span
            title={tag?.tag}
            className=" text-sm font-normal"
          >
            {tag?.tag}
          </span>
        </div>
      </td>
      <td className="pl-24">
        <div className={`h-6 w-8 rounded-sm ${tagColor}`} />
      </td>
      <td className="pl-20 text-sm font-normal">
        <div
          className="flex gap-2 items-center"
        >
          <button
            title="Delete"
            type="button"
                      // onClick={() => dispatch(removeUserInfo(user.id))}
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
                  { modalType: 'tag-create' },
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
        </div>
      </td>
    </tr>
  );
}

export default TagsTableRow;
