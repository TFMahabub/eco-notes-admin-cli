/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines */
import moment from 'moment';
import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BLOGTYPE } from '../../components/types/blogTypes';
import ErrorText from '../../components/utils/ReUse/ErrorText';
import { LoadingSpinner } from '../../components/utils/ReUse/LoadingSpinner';
import { useGetBlogsQuery } from '../../feauters/blog/blogApi';
import RecentBlogTableHeader from './RecentBlogTableHeader';

function RecentBlogTable() {
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
      <table className="w-full whitespace-nowrap text-gray">
        <thead className="">
          <RecentBlogTableHeader />
        </thead>
        <tbody className="h-20 overflow-y-auto">
          {allBlogs.map((blog:BLOGTYPE) => (
            <tr
              key={blog?._id}
              id="tr"
              className="text-xs bg-white border-b h-14 text-textColor border-borderColor/10 even:bg-gray/5 last-of-type:border-b-0"
            >
              <td className="pl-4">
                <div className="flex items-center gap-2">
                  <span
                    title={blog?._id}
                    className="text-sm font-normal "
                  >
                    {blog?._id?.length > 24 ? blog?._id?.slice(0, 24) : blog?._id}
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <div className="flex items-center gap-2">
                  <span
                    title={blog?.title}
                    className="text-sm font-normal "
                  >
                    {blog?.title?.length > 24 ? blog?.title?.slice(0, 24) : blog?.title}
                  </span>
                </div>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span
                  title={blog?.uid?.toString()}
                  className="text-sm font-normal "
                >
                  {blog?.uid}
                </span>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span
                  title={moment(blog?.postTime).format('LLL')}
                  className="text-sm font-normal "
                >
                  {moment(blog?.postTime).format('LLL')}
                </span>
              </td>
              <td className="pl-20 text-sm font-normal">
                <div
                  className="flex items-center gap-2"
                >
                  <button
                    type="button"
                    title="Delete"
                    // onClick={() => dispatch(removeUserInfo(user.id))}
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-error bg-error/10 cursor-pointer hover:bg-error/20"
                  >
                    <RiDeleteBinLine
                      className="text-xl"
                    />
                  </button>
                  <Link
                    to="/"
                    title="Watch"
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-green bg-green/10 cursor-pointer hover:bg-green/20"
                  >
                    <HiOutlineEye
                      className="text-xl"
                    />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return content;
}

export default RecentBlogTable;
