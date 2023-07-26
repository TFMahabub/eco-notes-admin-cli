import { useEffect } from 'react';
import ListingTable from './ListingTable';

function ListingPage() {
  useEffect(() => {
    document.title = 'Listing';
  }, []);
  return (
    <>
      <div className="bg-secondary p-8 space-y-6">
        <ListingTable />
      </div>
      <div>
        another section
      </div>
    </>
  );
}

export default ListingPage;
