/* eslint-disable max-lines */
import { BsListUl } from 'react-icons/bs';
import { FaChartPie, FaKeyboard } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { MdLibraryBooks, MdOutlineKeyboardArrowRight } from 'react-icons/md';
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
      {/* ----------------Products---------------- */}
      <li className="">
        <details className="group">
          <summary className="flex items-center justify-between border-l-[6px] border-secondary group-hover:border-blue group-hover:bg-blue/20 px-12 py-2 text-base text-textColor cursor-pointer">
            <span className="flex items-center gap-2 group-open:text-blue">
              <RiDatabase2Fill className="text-lg" />
              Products
            </span>
            <MdOutlineKeyboardArrowRight className="group-open:rotate-90 text-xl font-semibold text-textColor duration-common" />
          </summary>
          <div className="">
            <SingleNavLink
              toLink="/products/blogs"
              dropDown
            >
              <MdLibraryBooks className="text-lg" />
              Blogs
            </SingleNavLink>
            <SingleNavLink
              toLink="/products/tags"
              dropDown
            >
              <IoMdPricetags className="text-lg" />
              Tags
            </SingleNavLink>
            <SingleNavLink
              toLink="/products/listing"
              dropDown
            >
              <BsListUl className="text-lg" />
              Listing
            </SingleNavLink>
          </div>
        </details>
      </li>
      {/* ----------------Users---------------- */}
      <li className="">
        <details className="group">
          <summary className="flex items-center justify-between border-l-[6px] border-secondary group-hover:border-blue group-hover:bg-blue/20 px-12 py-2 text-base text-textColor cursor-pointer">
            <span className="flex items-center gap-2 group-open:text-blue">
              <RiUser3Fill className="text-lg" />
              {' '}
              Users
            </span>
            <MdOutlineKeyboardArrowRight className="group-open:rotate-90 text-xl font-semibold text-textColor duration-common" />
          </summary>
          <div className="">
            <SingleNavLink
              toLink="/users/gest-users"
              dropDown
            >
              <TbUsersGroup className="text-lg fill-textColor" />
              Gest Users
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
