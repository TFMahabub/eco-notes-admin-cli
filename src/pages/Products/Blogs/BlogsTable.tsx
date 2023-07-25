/* eslint-disable max-lines */
import { CiImageOff } from 'react-icons/ci';
import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import BlogSearchingOption from './BlogSearchingOption';
import BlogsShortingOption from './BlogsShortingOption';
import BlogsTablesHeader from './BlogsTablesHeader';

function BlogsTable() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <section className="mt-sectionGap p-8 space-y-6">
      <div className="flex items-center justify-between">
        <TextDashboardSectionTitle>All Blogs Here</TextDashboardSectionTitle>
        <div className="flex items-center gap-2">
          <BlogSearchingOption />
          <BlogsShortingOption />
        </div>
      </div>
      <div />
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <BlogsTablesHeader />
        </thead>
        <tbody className="h-20 overflow-y-auto">
          {array.map((user) => (
            <tr
              key={user}
              id="tr"
              className="h-14 text-xs text-textColor bg-white even:bg-gray/5 hover:bg-gray-100 border-b border-gray/10 last-of-type:border-b-0"
            >
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  <span
                    // title={`${user.firstName} ${' '} ${user.lastName}`}
                    className=" text-sm font-normal"
                  >
                    64b45062bef1a756372e4c14
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  <CiImageOff className="text-3xl fill-gray" />
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  <span
                    // title={user.email}
                    className=" text-sm font-normal"
                  >
                    done
                  </span>
                </div>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span
                //   title={user.phoneNumber}
                  className=" text-sm font-normal"
                >
                  done
                </span>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span
                //   title={user.address}
                  className=" text-sm font-normal"
                >
                  done
                </span>
              </td>
              <td className="pl-20 text-sm font-normal">
                <div
                  className="flex gap-2 items-center"
                >
                  <button
                    title="Delete"
                    type="button"
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
    </section>
  );
}

export default BlogsTable;
