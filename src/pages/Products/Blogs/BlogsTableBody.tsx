import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function BlogsTableBody({ blog }:any) {
  return (
    <tr
      className="h-14 text-xs text-textColor bg-white even:bg-gray/5 hover:bg-gray-100 border-b border-gray/10 last-of-type:border-b-0"
    >
      <td className="pl-4">
        <span
          title={blog?._id}
          className=" text-sm font-normal"
        >
          {blog?._id}
        </span>
      </td>
      <td className="pl-4">
        <span
          title={blog?.title}
          className=" text-sm font-normal"
        >
          {blog?.title.length > 40 ? `${blog?.title.slice(0, 40)}...` : blog?.title}
        </span>
      </td>
      <td className="pl-4 text-sm font-normal">
        <span
                //   title={user.phoneNumber}
          className=" text-sm font-normal"
        >
          {blog?.postTime}
          12: 45, 12/12/2023
        </span>
      </td>
      <td className="pl-16 text-sm font-normal">
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
  );
}

export default BlogsTableBody;
