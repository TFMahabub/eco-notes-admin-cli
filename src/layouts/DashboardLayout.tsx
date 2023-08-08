/* eslint-disable @typescript-eslint/no-use-before-define */
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import { RootState } from '../app/store';
import EditTagModal from '../components/modal/EditTagModal';
import MediumModal from '../components/modal/MediumModal';
import SmallModal from '../components/modal/SmallModal';
import TagColorModal from '../components/modal/TagColorModal';
import TagPostModal from '../components/modal/TagPostModal';
import Navbar from '../components/shared/navbar/Navbar';
import AsideAllMenus from '../pages/aside/AsideAllMenus';

function DashboardLayouts() {
  const { modalCondition, modalType } = useAppSelector((state: RootState) => state.modal);

  return (
    <section className="relative">
      <nav className="absolute top-0 w-full bg-primary h-14">
        <Navbar />
      </nav>
      <section className="grid h-screen grid-cols-5 pt-14 gap-">
        <aside className="h-full col-span-5 overflow-y-auto lg:col-span-1 bg-secondary">
          <section className=" space-y-common_75">
            <ul>
              <AsideAllMenus />
            </ul>
          </section>
        </aside>
        <main className="h-full col-span-5 overflow-y-auto lg:col-span-4 p-common_75">
          <Outlet />
        </main>
      </section>

      {modalType === 'tag-post' && modalCondition && (
        <MediumModal modalTitle="Tag Create Form">
          <TagPostModal />
        </MediumModal>
      )}

      {modalType === 'tag-edit' && modalCondition && (
        <MediumModal modalTitle="Tag Edit Form">
          <EditTagModal />
        </MediumModal>
      )}

      {modalType === 'tag-color-add' && modalCondition && (
        <SmallModal modalTitle="Tag Color Add">
          <TagColorModal />
        </SmallModal>
      )}

    </section>
  );
}

export default DashboardLayouts;
