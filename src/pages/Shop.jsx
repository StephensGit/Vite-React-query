import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchShop from '../api/fetchShop';

const Shop = () => {
  const { id } = useParams();
  const results = useQuery(['shop', id], fetchShop);
  const navigate = useNavigate();

  if (results.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
        <h3>🌀</h3>
      </div>
    );
  }

  const shop = results.data;

  return (
    <div>
      <h1>Shop Page - {id}</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Shop;
