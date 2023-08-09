import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import MostPopularBlogsTableHeader from './MostPopularBlogsTableHeader';

function MostPopularBlogsTable() {
  const array = [1, 2, 3, 4, 5];
  return (
    <table className="w-full whitespace-nowrap text-gray">
      <thead className="">
        <MostPopularBlogsTableHeader />
      </thead>
      <tbody className="h-20 overflow-y-auto">
        {array.map((user) => (
          <tr
            key={user}
            id="tr"
            className="h-14 text-xs text-textColor bg-white border-b border-borderColor/10 even:bg-gray/5 last-of-type:border-b-0"
          >
            <td className="pl-4">
              <div className="flex gap-2 items-center">
                <span
                  title="64b45062bef1a756372e4c14"
                  className=" text-sm font-normal"
                >
                  {'64b45062bef1a756372e4c14'.length > 24 ? '64b45062bef1a756372e4c14'.slice(0, 24) : '64b45062bef1a756372e4c14'}
                </span>
              </div>
            </td>
            <td className="pl-4">
              <div className="flex gap-2 items-center">
                <span
                  title="this is updated titleeeeeeeeeeee"
                  className=" text-sm font-normal"
                >
                  {'this is updated titleeeeeeeeeeee'.length > 24 ? 'this is updated titleeeeeeeeeeee'.slice(0, 24) : 'this is updated titleeeeeeeeeeee'}
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

export default MostPopularBlogsTable;
