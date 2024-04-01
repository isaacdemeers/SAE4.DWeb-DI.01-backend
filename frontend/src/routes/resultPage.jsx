
import { useLoaderData } from 'react-router-dom';
import { fetchResults } from '../lib/loaders';

import Result from '../ui/Result';
import SearchBar from '../ui/SearchBar';




export async function loader({ params }) {
  let data = await fetchResults(params.text);
  return data;
}

export default function ResultPage() {
  let data = useLoaderData();
  return (
    <>
      <SearchBar />

      <Result results={data} />
    </>
  );
}