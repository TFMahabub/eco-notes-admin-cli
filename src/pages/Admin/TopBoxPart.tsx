import { GoDiscussionOutdated } from 'react-icons/go';
import { IoMdPricetags } from 'react-icons/io';
import { MdFormatListBulleted, MdLibraryBooks } from 'react-icons/md';
import { RiUserFill } from 'react-icons/ri';
import TopBoxComponent from './TopBoxComponent';

function TopBoxPart() {
  return (
    <>
      {/* --------------Blogs-------------- */}
      <div className="flex items-center justify-center gap-common bg-blue h-32 rounded-lg">
        <TopBoxComponent
          itemName="Blogs"
          quantity="220k"
        >
          <MdLibraryBooks
            className="text-6xl p-2 bg-secondary/50 rounded-lg font-semibold text-secondary"
          />
        </TopBoxComponent>
      </div>
      {/* --------------Users-------------- */}
      <div className="flex items-center justify-center gap-common bg-green h-32 rounded-lg">
        <TopBoxComponent
          itemName="Users"
          quantity="100k"
        >
          <RiUserFill
            className="text-6xl p-2 bg-secondary/50 rounded-lg font-semibold text-secondary"
          />
        </TopBoxComponent>
      </div>
      {/* --------------Tags-------------- */}
      <div className="flex items-center justify-center gap-common bg-pink h-32 rounded-lg">
        <TopBoxComponent
          itemName="Tags"
          quantity="100k"
        >
          <IoMdPricetags
            className="text-6xl p-2 bg-secondary/50 rounded-lg font-semibold text-secondary"
          />
        </TopBoxComponent>
      </div>
      {/* --------------Listings-------------- */}
      <div className="flex items-center justify-center gap-common bg-orenge h-32 rounded-lg">
        <TopBoxComponent
          itemName="Listings"
          quantity="10k"
        >
          <MdFormatListBulleted
            className="text-6xl p-2 bg-secondary/50 rounded-lg font-semibold text-secondary"
          />
        </TopBoxComponent>
      </div>
      {/* --------------Discuss-------------- */}
      <div className="flex items-center justify-center gap-common bg-pruple h-32 rounded-lg">
        <TopBoxComponent
          itemName="Discuss"
          quantity="100k"
        >
          <GoDiscussionOutdated
            className="text-6xl p-2 bg-secondary/50 rounded-lg font-semibold text-secondary"
          />
        </TopBoxComponent>
      </div>
    </>
  );
}

export default TopBoxPart;
