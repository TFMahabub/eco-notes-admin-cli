/* eslint-disable import/no-extraneous-dependencies */
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import TextDashboardSectionTitle from '../../components/utils/ReUse/TextDashboardSectionTitle';

const percentage = 66;

function ChartBlogPostRate() {
  return (
    <div className="space-y-6">
      <article className="text-start">
        <TextDashboardSectionTitle>
          This Week Blog Post Rate:
        </TextDashboardSectionTitle>
      </article>
      <CircularProgressbar
        className="h-40"
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={6}
      />
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-textColor">Last Week</p>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowUp className="text-2xl font-medium text-green" />
            <p className="text-textColor">40%</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-textColor">Last Month</p>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowUp className="text-2xl font-medium text-green" />
            <p className="text-textColor">70%</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-textColor">Last 6 Month</p>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowDown className="text-2xl font-medium text-error" />
            <p className="text-textColor">-10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartBlogPostRate;
