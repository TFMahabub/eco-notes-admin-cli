import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SearchingInput from '../../../components/utils/ReUse/SearchingInput';
import ShortingInput from '../../../components/utils/ReUse/ShortingInput';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import GestUsersTableHeader from './GestUsersTableHeader';

function GestUsersTable() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div className="flex items-center justify-between">
        <TextDashboardSectionTitle>All Gest users Here</TextDashboardSectionTitle>
        <div className="flex items-center gap-2">
          <SearchingInput
            id="listing"
            name="listing"
            // onChange={(e) => console.log(e.target.value)}
          />
          {/* <TagsShortingOption /> */}
          <ShortingInput />
        </div>
      </div>
      <div />
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <GestUsersTableHeader />
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
                  <span
                    // title={`${user.firstName} ${' '} ${user.lastName}`}
                    className=" text-sm font-normal"
                  >
                    Mahabub Alam
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <span
                    // title={`${user.firstName} ${' '} ${user.lastName}`}
                  className=" text-sm font-normal"
                >
                  rjmahabub543@gmail.com
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
    </>
  );
}

export default GestUsersTable;
