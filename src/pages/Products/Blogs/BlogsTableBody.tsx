/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BLOGTYPE } from '../../../components/types/blogTypes';

function BlogsTableBody({ blog }:{ blog: BLOGTYPE }) {
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
          {blog?.title.length > 24 ? `${blog?.title.slice(0, 24)}...` : blog?.title}
        </span>
      </td>
      <td className="pl-12 text-sm font-normal">
        <span
          title={toString(blog?.uid)}
          className=" text-sm font-normal"
        >
          {blog?.uid}
        </span>
      </td>
      <td className="pl-4 text-sm font-normal">
        <span
          title={blog?.postTime}
          className=" text-sm font-normal"
        >
          {moment(blog?.postTime).format('LLL')}
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
