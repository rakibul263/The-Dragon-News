import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
  const {id} = useParams();
  return (
    <div>
      category news - {id}
    </div>
  );
};

export default CategoryNews;
