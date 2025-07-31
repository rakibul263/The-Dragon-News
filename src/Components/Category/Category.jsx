import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("categories.json") .then(res => res.json());

const Category = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className='font-bold'>All Categories - {categories.length}</h2>
      <div className='grid grid-cols-1 mt-5 gap-2'>
        {
          categories.map(category => <NavLink key={category.id} className="btn bg-white border-none shadow-none hover:bg-base-200 font-semibold text-accent" to={`/category/${category.id}`}>{category.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Category;
