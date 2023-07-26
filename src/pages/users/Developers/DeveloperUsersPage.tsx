import DeveloperUsersTable from './DeveloperUsersTable';

function DeveloperUsersPage() {
  return (
    <>
      <div className="bg-secondary p-8 space-y-6">
        <DeveloperUsersTable />
      </div>
      <div>
        another section
      </div>
    </>
  );
}

export default DeveloperUsersPage;
