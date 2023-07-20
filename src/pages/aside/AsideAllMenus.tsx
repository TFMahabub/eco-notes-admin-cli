import { FaChartPie } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SingleNavLink from './SingleNavLink';

function AsideAllMenus() {
  return (
    <>
      <li className="">
        <SingleNavLink
          toLink="/dashboard"
        >
          <FaChartPie />
          Admin
        </SingleNavLink>
      </li>
      <li className="">
        <SingleNavLink
          toLink="/profile"
        >
          <FaChartPie />
          Profile
        </SingleNavLink>
      </li>
      <li className="">
        <details className="group">
          <summary className="flex items-center justify-between border-l-[6px] border-secondary group-hover:border-blue group-hover:bg-blue/20 px-12 py-2 text-base text-textColor cursor-pointer">
            DropDown
            <MdOutlineKeyboardArrowRight className="group-open:rotate-90 text-lg font-semibold text-textColor duration-common" />
          </summary>
          <SingleNavLink
            toLink="/blogs"
          >
            <FaChartPie />
            Blog
          </SingleNavLink>
          <SingleNavLink
            toLink="/cart-table"
          >
            Cart-table
          </SingleNavLink>
        </details>
      </li>
    </>
  );
}
export default AsideAllMenus;
