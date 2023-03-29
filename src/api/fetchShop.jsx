const fetchShop = async ({ queryKey }) => {
  const [_key, id] = queryKey;

  const apiRes = await fetch(`http://localhost:4000/api/coffeeshops/${id}`);

  // if error throw error - REACT QUERY expects this
  if (!apiRes.ok) {
    throw new Error(`Shops not found`);
  }
  // React Query expects you return a promise
  const data = await apiRes.json();
  return data;
};

export default fetchShop;
