import BlogsTable from './BlogsTable';

function BlogsPage() {
  return (
    <>
      <div className="bg-secondary p-8 space-y-6 rounded-md">
        <BlogsTable />
      </div>
      <div>
        another section
      </div>
    </>
  );
}

export default BlogsPage;
