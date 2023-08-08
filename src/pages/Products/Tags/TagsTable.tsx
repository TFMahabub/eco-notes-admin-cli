/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import { TAGTYPE } from '../../../components/types/tagType';
import DataNotFound from '../../../components/utils/ReUse/DataNotFound';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import SearchingInput from '../../../components/utils/ReUse/SearchingInput';
import ShortingInput from '../../../components/utils/ReUse/ShortingInput';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import { useGetAllTagsQuery } from '../../../feauters/Tags/TagsApi';
import TagsTableHeader from './TagsTableHeader';
import TagsTableRow from './TagsTableRow';

function TagsTable() {
  const { data: allTags, isLoading, error } = useGetAllTagsQuery(undefined);

  let content;
  if (isLoading && !error) {
    content = <section className="flex items-center justify-center"><LoadingSpinner /></section>;
  }
  if (!isLoading && error) {
    content = <DataNotFound />;
  }
  if (allTags && !isLoading && !error) {
    content = (
      <table className="w-full whitespace-nowrap text-gray border border-borderColor">
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
  return (
    <>
      <div className="flex items-center justify-between">
        <TextDashboardSectionTitle>All Blogs Here</TextDashboardSectionTitle>
        <div className="flex items-center gap-2">
          <SearchingInput
            id="tags"
            name="tags"
          />
          <ShortingInput />
        </div>
      </div>
      {content}
    </>
  );
}

export default TagsTable;
