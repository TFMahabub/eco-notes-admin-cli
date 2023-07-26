import { useEffect } from 'react';
import TagsTable from './TagsTable';

function TagsPage() {
  useEffect(() => {
    document.title = 'Tags';
  }, []);
  return (
    <>
      <div className="bg-secondary p-8 space-y-6">
        <TagsTable />
      </div>
      <div>
        another section
      </div>
    </>
  );
}

export default TagsPage;
