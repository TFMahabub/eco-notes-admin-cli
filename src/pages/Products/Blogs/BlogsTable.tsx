/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import DataNotFound from '../../../components/utils/ReUse/DataNotFound';
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
    content = <DataNotFound />;
  }
  if (allBlogs && !isLoading && !error) {
    content = (
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <BlogsTablesHeader />
        </thead>
        <tbody className="h-20 overflow-y-auto">
          {allBlogs?.map((blog:any) => <BlogsTableBody key={blog?._id} blog={blog} />)}
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
