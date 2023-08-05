/* eslint-disable @typescript-eslint/no-use-before-define */
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import { RootState } from '../app/store';
import MediumModal from '../components/modal/MediumModal';
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
      {modalType === 'tag-edit' && modalCondition && <MediumModal modalTitle="Tag Edit Form">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos vel omnis perferendis rem quasi magnam soluta ipsa. Reprehenderit numquam odio adipisci. Reprehenderit natus nihil quia necessitatibus quos recusandae voluptatum laboriosam quam distinctio. Facilis, alias est ab excepturi ipsa quis eveniet vel sint ea odit deserunt nam. Cupiditate, recusandae consequatur perferendis totam aperiam dicta illum possimus maxime odit aliquid deleniti perspiciatis! Est ad autem quo blanditiis quidem debitis perferendis accusamus exercitationem, voluptates modi excepturi! Distinctio, quos hic dicta praesentium modi iusto temporibus tempore aspernatur atque odio at excepturi, earum consequatur neque vero perferendis? Dolore ab velit quaerat inventore facere repudiandae animi eveniet molestias provident earum dignissimos tempora, nulla eaque perferendis. Quidem placeat eligendi assumenda incidunt iste vel autem mollitia voluptatem numquam, maiores, exercitationem quae, similique fugiat nostrum modi. Eum inventore, adipisci quos neque fuga maiores fugit expedita rerum reiciendis, veniam dolorum quam, necessitatibus voluptatem magnam. Rerum suscipit mollitia totam sequi dolores cumque quisquam, explicabo saepe voluptatem. At recusandae repellendus sit saepe expedita labore quaerat. Excepturi itaque odit cumque, qui magnam optio quae sint molestias delectus atque facere eaque. Impedit quia minima esse veniam, dolorem tempore eius illo aperiam optio quod reprehenderit odio, pariatur quae quidem cum reiciendis dicta est doloremque nesciunt fugit accusantium asperiores! Aliquam ab asperiores unde quod voluptatum! Maiores illo nihil voluptate temporibus sint? Eveniet asperiores veritatis perspiciatis maiores maxime ipsam quidem adipisci facilis officiis? Id, deserunt fugit? Voluptas hic rem neque exercitationem officia corporis ex sed in excepturi. Iusto, eum. Natus recusandae quae ut nam dolorem soluta optio ex cum commodi aspernatur, quam blanditiis quos modi. Nobis delectus perspiciatis unde, asperiores error tenetur sapiente ratione consequatur nostrum ea ut iusto totam quaerat eaque, architecto aspernatur voluptate, perferendis libero. Doloremque in fugit reprehenderit similique sit est delectus sed. Cumque sapiente nulla quas, minus odit animi eaque, officia facilis cum, quam totam repellat eligendi eos corporis quibusdam hic ipsam? Voluptatum dignissimos blanditiis earum quos deserunt ad tempore fugiat facilis incidunt odio! Sint officiis neque tempore repellat excepturi commodi provident hic nemo laudantium nostrum dolorem qui eaque repellendus, labore eligendi? Molestiae unde dicta aut illum eos praesentium placeat nemo nihil, vel dolor deserunt libero minima aperiam ad est laborum earum asperiores distinctio aliquid alias laudantium eligendi quis. Consectetur laboriosam ducimus a eaque cupiditate dolor vitae, unde rem reprehenderit ea odio impedit architecto quam iste tempore possimus commodi expedita temporibus excepturi modi repellendus vel. Modi reprehenderit tenetur eligendi placeat et amet.</MediumModal>}
    </section>
  );
}

export default DashboardLayouts;
