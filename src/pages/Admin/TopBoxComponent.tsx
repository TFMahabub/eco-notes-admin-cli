import TextMedium from '../../components/utils/ReUse/TextMedum';
import TextPrimary from '../../components/utils/ReUse/TextPrimary';

function TopBoxComponent(
  { children, quantity, itemName }:{ children: React.ReactNode; quantity: string; itemName:string },
) {
  return (
    <>
      {children}
      <div>
        <TextPrimary extraClass="text-secondary">{quantity}</TextPrimary>
        <TextMedium extraClass="text-end text-secondary">{itemName}</TextMedium>
      </div>
    </>
  );
}

export default TopBoxComponent;
