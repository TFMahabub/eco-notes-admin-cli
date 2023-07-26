import { useEffect } from 'react';
import TextDashboardSectionTitle from '../../components/utils/ReUse/TextDashboardSectionTitle';
import ChartBlogHighLikeCommentRate from './ChartBlogHighLikeCommentRate';
import ChartBlogPostRate from './ChartBlogPostRate';
import MostPopularBlogsTable from './MostPopularBlogsTable';
import RecentBlogTable from './RecentBlogTable';
import TopBoxPart from './TopBoxPart';

function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <section className="h-full space-y-partGap">
      <head>
        <title>Dashboard</title>
      </head>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TopBoxPart />
      </div>
      {/* --------------Chart-Part-------------- */}
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
      {/* -------------Recent-post-Blogs--------------- */}
      <div className="bg-secondary p-6 space-y-common">
        <TextDashboardSectionTitle>Recent Post Blogs</TextDashboardSectionTitle>
        <RecentBlogTable />
      </div>
      {/* -------------Most-popular-Blogs--------------- */}
      <div className="bg-secondary p-6 space-y-common">
        <TextDashboardSectionTitle>Most popular Blogs</TextDashboardSectionTitle>
        <MostPopularBlogsTable />
      </div>
    </section>
  );
}

export default Dashboard;
