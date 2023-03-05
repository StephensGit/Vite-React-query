import { useQuery } from '@tanstack/react-query';
import fetchShops from './fetchShops';

const Shops = () => {
  const results = useQuery(['shops'], fetchShops);
  if (results.isLoading) {
    return <h2>Loading...</h2>;
  }
  const shops = results.data.shops[0];
  return (
    <div>
      {shops?.map((shop) => (
        <div key={shop.id}>
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Shops;
