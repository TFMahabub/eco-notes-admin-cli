import { useEffect } from 'react';
import ColorsSections from './ColorsSections';
import TagsTable from './TagsTable';

function TagsPage() {
  useEffect(() => {
    document.title = 'Tags';
  }, []);
  return (
    <section className="space-y-common_75">
      <div className="bg-secondary p-8 space-y-6">
        <TagsTable />
      </div>
      <div className="bg-secondary p-8 space-y-6">
        <ColorsSections />
      </div>
    </section>
  );
}

export default TagsPage;
