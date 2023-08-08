/* eslint-disable no-underscore-dangle */
import { useTagsColor } from '../../../components/hook/useTagsColor';
import { TAGTYPE } from '../../../components/types/tagType';
import ActionButtons from './ActionButtons';

function TagsTableRow({ tag }:{ tag:TAGTYPE }) {
  const tagColor = useTagsColor(tag?.tag);
  return (
    <tr
      id="tr"
      className="h-14 text-xs text-textColor bg-white even:bg-gray/5 hover:bg-gray-100 border-b border-borderColor last-of-type:border-b-0"
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
          <ActionButtons tagID={tag?._id} />
        </div>
      </td>
    </tr>
  );
}

export default TagsTableRow;
