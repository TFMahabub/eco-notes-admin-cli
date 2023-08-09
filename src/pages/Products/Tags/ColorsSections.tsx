/* eslint-disable no-underscore-dangle */
import { HiOutlinePlusSm } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import ColorCart from '../../../components/cart/ColorCart';
import { TAGCOLORTYPE } from '../../../components/types/tagColorType';
import ButtonBorder from '../../../components/utils/ReUse/ButtonBorder';
import EmptyDataText from '../../../components/utils/ReUse/EmptyDataText';
import { LoadingSpinner } from '../../../components/utils/ReUse/LoadingSpinner';
import TextDashboardSectionTitle from '../../../components/utils/ReUse/TextDashboardSectionTitle';
import { useGetAllTagColorsQuery } from '../../../feauters/Tags/tagColorApi';
import { setModalOpen } from '../../../feauters/modal/modalSlice';

function ColorsSections() {
  const dispatch = useDispatch();
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
    content = <EmptyDataText />;
  }
  if (allTagColors && allTagColors.length > 0) {
    content = (
      <>
        <div className="flex items-center justify-between">
          <TextDashboardSectionTitle>
            All Colors Here
          </TextDashboardSectionTitle>
          <ButtonBorder
            onClick={() => dispatch(
              setModalOpen({ modalType: 'tag-color-add' }),
            )}
          >
            <HiOutlinePlusSm
              className="text-2xl text-textColor"
            />
            Add Color
          </ButtonBorder>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-common">
          {
            allTagColors?.map(
              (color:TAGCOLORTYPE) => (
                <ColorCart
                  key={color?._id}
                  color={color}
                />
              ),
            )
          }
        </div>
      </>
    );
  }
  return content;
}

export default ColorsSections;
