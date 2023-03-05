import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchShops from '../api/fetchShops';

const Shop = () => {
  // shop can be any arbitrary caching key, if this isn't in cache, run fetchShops
  const results = useQuery(['shops'], fetchShops);
  // When loading on first load it will show this
  if (results.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
        <h3>🌀</h3>
      </div>
    );
  }

  // After here, app can assume it has loaded
  const shops = results.data;

  return (
    <ul>
      <li>test</li>
      {shops?.map((shop) => {
        return (
          <li key={shop._id}>
            <Link to={`/${shop._id}`}>{shop.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Shop;
