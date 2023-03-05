const fetchSoaps = async ({ queryKey }) => {
  const apiRes = await fetch(`http://localhost:4000/api/coffeeshops`);

  if (!apiRes.ok) {
    throw new Error(`Soaps not found`);
  }
  const data = await res.json();
  return data;
};

export default fetchSoaps;
