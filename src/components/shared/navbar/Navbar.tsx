// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import logo from '../../../../public/logo-white.png';

function Navbar() {
  // const { expandAsideMenu } = useAppSelector((state) => state.navbar);
  // const dispatch = useAppDispatch();
  return (
    <div
      className="container flex items-center justify-between h-full"
    >
      <div className="flex items-center gap-common">
        <img src={logo} alt="logo" className="w-10" />
        {/* <div className="flex items-center gap-2">
          <RiAdminFill className="text-xl text-secondary" />
          <h4 className="text-lg font-semibold text-secondary">Admin Panal</h4>
        </div> */}
        <h4 className="text-lg font-semibold text-secondary">Admin Panel</h4>
      </div>
    </div>
  );
}

export default Navbar;
