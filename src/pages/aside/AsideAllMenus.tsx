import { FaChartPie, FaKeyboard } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiDatabase2Fill, RiUser3Fill } from 'react-icons/ri';
import { TbUsersGroup } from 'react-icons/tb';
import SingleNavLink from './SingleNavLink';

function AsideAllMenus() {
  return (
    <>
      <li className="">
        <SingleNavLink
          toLink="/admin"
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
            <span className="flex items-center gap-2">
              <RiUser3Fill className="text-lg" />
              {' '}
              Users
            </span>
            <MdOutlineKeyboardArrowRight className="group-open:rotate-90 text-xl font-semibold text-textColor duration-common" />
          </summary>
          <div className="">
            <SingleNavLink
              toLink="/blogs"
              dropDown
            >
              <TbUsersGroup className="text-lg fill-textColor" />
              Gest User
            </SingleNavLink>
            <SingleNavLink
              toLink="/cart-table"
              dropDown
            >
              <FaKeyboard className="text-lg" />
              Developer
            </SingleNavLink>
          </div>
        </details>
      </li>
    </>
  );
}
export default AsideAllMenus;
