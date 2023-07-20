import { FaChartPie } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiDatabase2Fill } from 'react-icons/ri';
import SingleNavLink from './SingleNavLink';

function AsideAllMenus() {
  return (
    <>
      <li className="">
        <SingleNavLink
          toLink="/dashboard"
        >
          <FaChartPie className="text-lg" />
          Admin
        </SingleNavLink>
      </li>
      <li className="">
        <SingleNavLink
          toLink="/products"
        >
          <RiDatabase2Fill className="text-lg" />
          Products
        </SingleNavLink>
      </li>
      <li className="">
        <details className="group">
          <summary className="flex items-center justify-between border-l-[6px] border-secondary group-hover:border-blue group-hover:bg-blue/20 px-12 py-2 text-base text-textColor cursor-pointer">
            DropDown
            <MdOutlineKeyboardArrowRight className="group-open:rotate-90 text-lg font-semibold text-textColor duration-common" />
          </summary>
          <div className="">
            <SingleNavLink
              toLink="/blogs"
              dropDown
            >
              <FaChartPie />
              Blog
            </SingleNavLink>
            <SingleNavLink
              toLink="/cart-table"
              dropDown
            >
              Cart-table
            </SingleNavLink>
          </div>
        </details>
      </li>
    </>
  );
}
export default AsideAllMenus;
