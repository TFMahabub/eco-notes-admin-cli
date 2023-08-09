/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import { BLOGTYPE } from '../../../components/types/blogTypes';
import ErrorText from '../../../components/utils/ReUse/ErrorText';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import SearchingInput from '../../../components/utils/ReUse/SearchingInput';
import ShortingInput from '../../../components/utils/ReUse/ShortingInput';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import { useGetBlogsQuery } from '../../../feauters/blog/blogApi';
import BlogsTableBody from './BlogsTableBody';
import BlogsTablesHeader from './BlogsTablesHeader';

function BlogsTable() {
  const { data: allBlogs, isLoading, error } = useGetBlogsQuery(undefined);

  let content;
  if (isLoading && !error) {
    content = <section className="flex items-center justify-center"><LoadingSpinner /></section>;
  }
  if (!isLoading && error) {
    content = <ErrorText />;
  }
  if (allBlogs && !isLoading && !error) {
    content = (
      <table className="w-full border rounded-lg whitespace-nowrap text-gray border-borderColor">
        <thead className="border-b border-borderColor">
          <BlogsTablesHeader />
        </thead>
        <tbody className="h-20 overflow-y-auto">
          {allBlogs?.map((blog:BLOGTYPE) => (
            <BlogsTableBody
              key={blog?._id}
              blog={blog}
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
            id="blogs"
            name="blogs"
          />
          <ShortingInput />
        </div>
      </div>
      <div />
      {content}
    </>
  );
}

export default BlogsTable;
