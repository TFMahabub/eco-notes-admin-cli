/* eslint-disable @typescript-eslint/no-use-before-define */
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import { RootState } from '../app/store';
import ActionModal from '../components/modal/ActionModal';
import Navbar from '../components/shared/navbar/Navbar';
import AsideAllMenus from '../pages/aside/AsideAllMenus';

function DashboardLayouts() {
  const { modalCondition, modalType } = useAppSelector((state: RootState) => state.modal);

  return (
    <section className="relative">
      <nav className="absolute w-full top-0 bg-primary h-14">
        <Navbar />
      </nav>
      <section className="grid grid-cols-5 pt-14 h-screen gap-">
        <aside className="col-span-5 lg:col-span-1 bg-secondary h-full overflow-y-auto">
          <section className=" space-y-common_75">
            <ul>
              <AsideAllMenus />
            </ul>
          </section>
        </aside>
        <main className="col-span-5 lg:col-span-4 h-full overflow-y-auto p-common_75">
          <Outlet />
        </main>
      </section>
      {modalType === 'action' && modalCondition && (
      <ModalWrapper>
        <ActionModal />
      </ModalWrapper>
      )}
    </section>
  );
}

export default DashboardLayouts;

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="fixed inset-0 bg-primary/40 flex items-center justify-center">
      {children}
    </section>
  );
}
