function BlogsTablesHeader() {
  return (
    <tr className="h-10 w-full text-sm tracking-wide bg-gray/5 uppercase">
      <th className="text-start text-textColor font-normal pl-4">
        Blog Id
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Image
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Title
      </th>
      <th className="text-start text-textColor font-normal pl-12">
        Author
      </th>
      <th className="text-start text-textColor font-normal pl-12">
        Time
      </th>
      <th className="text-start text-textColor font-normal pl-24">
        Action
      </th>
    </tr>
  );
}

export default BlogsTablesHeader;
