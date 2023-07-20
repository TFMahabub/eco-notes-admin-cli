import { NavLink } from 'react-router-dom';

function SingleNavLink({ toLink, children }:{ toLink:string, children: any }) {
  return (
    <NavLink
      to={toLink}
      className={({ isActive }) => (isActive ? 'border-l-[6px] border-blue bg-blue/20 block px-12 py-2 text-base text-primary' : ' block px-12 py-2 border-l-[6px] border-secondary text-base text-textColor hover:border-blue hover:bg-blue/20 duration-common')}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </NavLink>
  );
}

export default SingleNavLink;
