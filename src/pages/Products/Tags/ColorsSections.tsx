import { EMPTYDATATEXT } from '../../../components/GlobalTextVariable/GlobalText';
import ColorCart from '../../../components/cart/ColorCart';
import { TAGCOLORTYPE } from '../../../components/types/tagColorType';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import { useGetAllTagColorsQuery } from '../../../feauters/Tags/tagColorApi';

function ColorsSections() {
  const { data: allTagColors, isLoading, error } = useGetAllTagColorsQuery(undefined);

  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error && !isLoading) {
    content = <p>{EMPTYDATATEXT}</p>;
  }
  if (allTagColors && allTagColors.length > 0) {
    content = (
      <>
        <TextDashboardSectionTitle>
          All Colors Here
        </TextDashboardSectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-common">
          {
            allTagColors?.map(
              (color:TAGCOLORTYPE) => <ColorCart color={color} />,
            )
          }
        </div>
      </>
    );
  }
  return content;
}

export default ColorsSections;
