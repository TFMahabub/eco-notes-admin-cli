import { RiSearchLine } from 'react-icons/ri';

function AsideSearch() {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="" className="border border-textColor/60 rounded-md py-1 px-2 w-full flex items-center gap-1">
      <RiSearchLine className="text-lg text-textColor border" />
      <input type="text" name="" id="" className="border-0 ring-0 outline-none" />
    </label>
  );
}

export default AsideSearch;
