/* eslint-disable no-underscore-dangle */
import { TAGTYPE } from '../../../components/types/tagType';
import ActionButtons from './ActionButtons';

function TagsTableRow({ tag }:{ tag:TAGTYPE }) {
  return (
    <tr
      id="tr"
      className="text-xs bg-white border-b h-14 text-textColor even:bg-gray/5 hover:bg-gray-100 border-borderColor last-of-type:border-b-0"
    >
      <td className="pl-4">
        <div className="flex items-center gap-2">
          <span
            title={tag?._id}
            className="text-sm font-normal "
          >
            {tag?._id}
          </span>
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center gap-2">
          <span
            title={tag?.tag}
            className="text-sm font-normal "
          >
            {tag?.tag}
          </span>
        </div>
      </td>
      <td className="pl-24">
        <div
          className="w-8 h-6 rounded-sm"
          style={{ backgroundColor: `${tag?.color}` }}
        />
      </td>
      <td className="pl-20 text-sm font-normal">
        <div
          className="flex items-center gap-2"
        >
          <ActionButtons tagID={tag?._id} />
        </div>
      </td>
    </tr>
  );
}

export default TagsTableRow;
