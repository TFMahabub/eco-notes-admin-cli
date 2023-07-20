// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineMenuFold } from 'react-icons/ai';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiAdminFill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { setExpandAsideMenu } from '../../../feauters/navbar/navbarSlice';

function Navbar() {
  const { expandAsideMenu } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  return (
    <div
      className="container flex items-center justify-between h-full"
    >
      <div className="flex items-center gap-common_75">
        <span role="button" onClick={() => dispatch(setExpandAsideMenu())}>
          <AiOutlineMenuFold
            className={`text-xl text-secondary cursor-pointer ${expandAsideMenu ? 'rotate-180' : ''}`}
          />
        </span>
        <div className="flex items-center gap-2">
          <RiAdminFill className="text-xl text-secondary" />
          <h4 className="text-lg font-semibold text-secondary">Admin Panal</h4>
        </div>
      </div>
      <h4>this is navbar</h4>
    </div>
  );
}

export default Navbar;
