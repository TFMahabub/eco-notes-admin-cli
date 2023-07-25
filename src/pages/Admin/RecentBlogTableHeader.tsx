function RecentBlogTableHeader() {
  return (
    <tr className="h-10 w-full text-sm tracking-wide bg-gray/5 uppercase">
      <th className="text-start bg-gray-5 font-normal text-textColor pl-4">
        {/* serial */}
        Blog Id
      </th>
      <th className="text-start bg-gray-5 font-normal text-textColor pl-4">
        {/* serial */}
        Title
      </th>
      <th className="text-start bg-gray-5 font-normal text-textColor pl-12">
        {/* Location */}
        Author
      </th>
      <th className="text-start bg-gray-5 font-normal text-textColor pl-12">
        {/* Last Activity */}
        Time
      </th>
      <th className="text-start bg-gray-5 font-normal text-textColor pl-24">
        {/* Last Activity */}
        Action
      </th>
    </tr>
  );
}

export default RecentBlogTableHeader;
