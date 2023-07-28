function ListingTableHeader() {
  return (
    <tr className="h-10 w-full text-sm tracking-wide bg-gray/5 uppercase">
      <th className="text-start text-textColor font-normal pl-4">
        Listing Id
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Name
      </th>
      <th className="text-start text-textColor font-normal pl-4">
        Color
      </th>
      <th className="text-start text-textColor font-normal pl-24">
        Action
      </th>
    </tr>
  );
}

export default ListingTableHeader;
