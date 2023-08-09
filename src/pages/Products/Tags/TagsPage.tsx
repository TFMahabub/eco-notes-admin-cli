import { useEffect } from 'react';
import ColorsSections from './ColorsSections';
import TagTableDataCondition from './TagTableDataCondition';

function TagsPage() {
  useEffect(() => {
    document.title = 'Tags';
  }, []);
  return (
    <section className="space-y-common_75">
      <div className="p-8 space-y-6 bg-secondary">
        <TagTableDataCondition />
      </div>
      <div className="p-8 space-y-6 bg-secondary">
        <ColorsSections />
      </div>
    </section>
  );
}

export default TagsPage;
