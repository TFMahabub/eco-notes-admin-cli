import { useEffect } from 'react';
import GestUsersTable from './GestUsersTable';

function GestUsersPage() {
  useEffect(() => {
    document.title = 'Gest-Users';
  }, []);
  return (
    <>
      <div className="bg-secondary p-8 space-y-6">
        <GestUsersTable />
      </div>
      <div>
        another section
      </div>
    </>
  );
}

export default GestUsersPage;
