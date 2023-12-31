// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

function ShortingInput() {
  const shortingOptions = [
    { value: 'Recent', label: 'Recent' },
  ];
  return (
    <Select
      options={shortingOptions}
      defaultValue={shortingOptions[0]}
    />
  );
}

export default ShortingInput;
