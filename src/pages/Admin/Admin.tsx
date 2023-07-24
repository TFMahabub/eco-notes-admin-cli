import TopBoxPart from './TopBoxPart';

function Admin() {
  return (
    <section className="h-full space-y-partGap">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TopBoxPart />
      </div>
      <div className="h-40 bg-secondary flex items-center justify-center">
        this is cart part
      </div>
    </section>
  );
}

export default Admin;
