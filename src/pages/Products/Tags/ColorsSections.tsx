import ColorCart from '../../../components/cart/ColorCart';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';

function ColorsSections() {
  const colors = true;

  let content;
  if (!colors) {
    content = (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (colors) {
    content = (
      <>
        <TextDashboardSectionTitle>
          All Colors Here
        </TextDashboardSectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-common">
          <ColorCart />
          <ColorCart />
          <ColorCart />
          <ColorCart />
          <ColorCart />
          <ColorCart />
          <ColorCart />
        </div>
      </>
    );
  }
  return content;
}

export default ColorsSections;
