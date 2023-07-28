function SearchingInput(
  { ...Attribute }:{
    // eslint-disable-next-line react/require-default-props
    name:string | undefined; id: string | undefined; onChange?: (e: unknown) => void; },
) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="" className="flex flex-col gap-1">
      <input
        type="text"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...Attribute}
        placeholder="Search..."
        className="border border-gray/60 focus:border-green/60 rounded-md h-9 px-4 w-60 focus:outline-none right-0 text-textColor"
      />
    </label>
  );
}

export default SearchingInput;
