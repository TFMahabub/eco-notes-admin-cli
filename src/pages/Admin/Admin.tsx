import TextDashboardSectionTitle from '../../components/utils/ReUse/TextDashboardSectionTitle';
import BlogsTable from './BlogsTable';
import ChartBlogHighLikeCommentRate from './ChartBlogHighLikeCommentRate';
import ChartBlogPostRate from './ChartBlogPostRate';
import TopBoxPart from './TopBoxPart';

function Admin() {
  return (
    <section className="h-full space-y-partGap">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TopBoxPart />
      </div>
      {/* --------------Cart-Part-------------- */}
      <div className="flex items-center justify-between gap-common">
        <div className="w-full bg-secondary p-common space-y-common">
          <article className="text-start">
            <TextDashboardSectionTitle>
              This week blog post rate:
            </TextDashboardSectionTitle>
          </article>
          <ChartBlogPostRate />
        </div>
        <div className="w-full bg-secondary">
          <ChartBlogHighLikeCommentRate />
        </div>
      </div>
      {/* -------------All-Blogs--------------- */}
      <div className="bg-secondary">
        <BlogsTable />
      </div>
    </section>
  );
}

export default Admin;
