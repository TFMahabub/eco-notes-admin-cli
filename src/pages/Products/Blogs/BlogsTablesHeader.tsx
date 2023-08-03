function BlogsTablesHeader() {
  return (
    <tr className="h-10 w-full text-sm tracking-wide bg-gray/5 uppercase">
      <th className="text-start text-textColor font-normal pl-4">
        Blog ID
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Title
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Post Time
      </th>
      <th className="text-start text-textColor font-normal pl-16">
        Action
      </th>
    </tr>
  );
}

export default BlogsTablesHeader;
