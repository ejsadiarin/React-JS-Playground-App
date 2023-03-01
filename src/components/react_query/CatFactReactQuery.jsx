// use React Query for fetchCatFact
// API: https://catfact.ninja/fact

import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const CatFactReactQuery = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], async () => {
    return axios.get('https://catfact.ninja/fact').then((res) => res.data)
  });

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Error 404</h3>
  }

  return (
    <>
      <h3>Cat Fact React Query</h3>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </>
  );
}

export default CatFactReactQuery