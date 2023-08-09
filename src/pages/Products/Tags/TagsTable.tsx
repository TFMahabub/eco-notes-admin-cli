/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import { TAGTYPE } from '../../../components/types/tagType';
import TagsTableHeader from './TagsTableHeader';
import TagsTableRow from './TagsTableRow';

function TagsTable({ allTags }:{ allTags: TAGTYPE[] }) {
  return (
    <table className="w-full border whitespace-nowrap text-gray border-borderColor">
      <thead className="border-b border-borderColor">
        <TagsTableHeader />
      </thead>
      <tbody className="h-20 overflow-y-auto">
        {allTags?.map((tag:TAGTYPE) => (
          <TagsTableRow
            key={tag?._id}
            tag={tag}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TagsTable;
