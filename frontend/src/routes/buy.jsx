
import { useLoaderData } from 'react-router-dom';
import Pricing from '../ui/Pricing';
import { fetchPricingData } from '../lib/loaders';



export async function loader() {
  return await fetchPricingData();
}

export default function Buy() {
  let data = useLoaderData();
  return (
    <>
      <Pricing {...data} />
    </>
  );
}
