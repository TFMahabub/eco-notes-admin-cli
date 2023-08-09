/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { BLOGTYPE } from '../../../components/types/blogTypes';
import ButtonDelete from '../../../components/utils/ReUse/ButtonDelete';
import ButtonWatch from '../../../components/utils/ReUse/ButtonWatch';

function BlogsTableBody({ blog }:{ blog: BLOGTYPE }) {
  const navigate = useNavigate();
  return (
    <tr
      className="h-14 text-xs text-textColor bg-white even:bg-gray/5 hover:bg-gray-100 border-b border-borderColor last-of-type:border-b-0"
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
          title={blog?.uid?.toString()}
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
          <ButtonDelete />
          <ButtonWatch
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </td>
    </tr>
  );
}

export default BlogsTableBody;
