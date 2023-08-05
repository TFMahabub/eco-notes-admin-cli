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
    <section className="space-y-partGap">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TopBoxPart />
      </div>
      {/* --------------Chart-Part-------------- */}
      <div className="grid grid-cols-5 gap-partGap">
        <div className="col-span-5 lg:col-span-2 bg-secondary p-6">
          <ChartBlogPostRate />
        </div>
        <div className="col-span-5 lg:col-span-3 bg-secondary p-6">
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
