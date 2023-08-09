/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import { HiOutlinePlusSm } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import ButtonBorder from '../../../components/utils/ReUse/ButtonBorder';
import EmptyDataText from '../../../components/utils/ReUse/EmptyDataText';
import ErrorText from '../../../components/utils/ReUse/ErrorText';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import SearchingInput from '../../../components/utils/ReUse/SearchingInput';
import ShortingInput from '../../../components/utils/ReUse/ShortingInput';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import { useGetAllTagsQuery } from '../../../feauters/Tags/TagsApi';
import { setModalOpen } from '../../../feauters/modal/modalSlice';
import TagsTable from './TagsTable';

function TagTableDataCondition() {
  const { data: allTags, isLoading, error } = useGetAllTagsQuery(undefined);
  const dispatch = useDispatch();

  let content;
  if (isLoading && !error) {
    content = (
      <section className="flex-center">
        <LoadingSpinner />
      </section>
    );
  }
  if (!isLoading && error) {
    content = <ErrorText />;
  }
  if (allTags === 0 && !isLoading && !error) {
    content = <EmptyDataText />;
  }
  if (allTags && !isLoading && !error) {
    content = <TagsTable allTags={allTags} />;
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-common">
          <TextDashboardSectionTitle>
            All Blogs Here
          </TextDashboardSectionTitle>
        </div>
        <div className="flex items-center gap-2">
          <ButtonBorder
            onClick={() => (
              dispatch(
                setModalOpen(
                  { modalType: 'tag-post' },
                ),
              )
            )}
          >
            <HiOutlinePlusSm
              className="text-2xl text-textColor"
            />
            Add New Tag
          </ButtonBorder>
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

export default TagTableDataCondition;
