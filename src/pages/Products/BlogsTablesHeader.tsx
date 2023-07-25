function BlogsTablesHeader() {
  return (
    <tr className="h-10 w-full text-lg tracking-wide bg-gray/10">
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
        {/* Browser */}
        Select
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
        {/* serial */}
        Blog Id
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
        {/* serial */}
        Title
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-12">
        {/* Location */}
        Author
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-12">
        {/* Last Activity */}
        Time
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-24">
        {/* Last Activity */}
        Action
      </th>
    </tr>
  );
}

export default BlogsTablesHeader;
