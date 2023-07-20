import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import AsideAllMenus from '../pages/aside/AsideAllMenus';
import AsideSearch from '../pages/aside/AsideSearch';

function DashboardLayouts() {
  return (
    <section className="relative">
      <nav className="absolute w-full top-0 bg-primary h-14">
        <Navbar />
      </nav>
      <section className="grid grid-cols-5 pt-14 h-screen">
        <aside className="col-span-5 lg:col-span-1 bg-secondary h-full overflow-y-auto">
          <section className=" space-y-common_75 pt-common">
            <div className="px-12">
              <AsideSearch />
            </div>
            <ul>
              <AsideAllMenus />
            </ul>
          </section>
        </aside>
        <main className="col-span-5 lg:col-span-4 h-full overflow-y-auto">
          <Outlet />
        </main>
      </section>
    </section>
  );
}

export default DashboardLayouts;
