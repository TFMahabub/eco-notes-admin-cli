/* eslint-disable max-lines */
import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TextDashboardSectionTitle from '../../components/utils/ReUse/TextDashboardSectionTitle';
import BlogsShortingOption from './BlogsShortingOption';
import BlogsTablesHeader from './BlogsTablesHeader';

function BlogsTable() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <section className="mt-sectionGap p-8 space-y-6">
      <div className="flex items-center justify-between">
        <TextDashboardSectionTitle>All Blogs Here</TextDashboardSectionTitle>
        <div className="flex items-center gap-2">
          <label htmlFor="" className="flex flex-col gap-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="border border-gray/60 focus:border-green/60 rounded-md h-9 px-4 w-60 focus:outline-none right-0 text-textColor"
            />
          </label>
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
              className="h-14 text-xs text-textColor bg-white hover:bg-gray/10 hover:bg-gray-100 border-b border-gray/50 last-of-type:border-b-none"
            >
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="" id="tr" />
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  {/* <ChromeIcon /> */}
                  <span
                    // title={`${user.firstName} ${' '} ${user.lastName}`}
                    className=" text-sm font-normal"
                  >
                    done
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  {/* <ChromeIcon /> */}
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
                    type="button"
                    // onClick={() => dispatch(removeUserInfo(user.id))}
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-error bg-error/10 cursor-pointer hover:bg-error/20"
                  >
                    <RiDeleteBinLine
                      className="text-xl"
                    />
                    {' '}
                    Delete
                  </button>
                  <Link
                    to="/"
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-green bg-green/10 cursor-pointer hover:bg-green/20"
                  >
                    <HiOutlineEye
                      className="text-xl"
                    />
                    {' '}
                    Watch
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
