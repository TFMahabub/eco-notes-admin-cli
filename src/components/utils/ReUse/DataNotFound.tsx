function DataNotFound({ message = 'Data Not Found!!!' }:{ message?: string; }) {
  return (
    <p>{message}</p>
  );
}

export default DataNotFound;
