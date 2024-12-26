import React from 'react';
import CategoryBar from '../components/CategoryBar';
import MenuList from '../components/MenuList';
import menuData from '@/data/menuData';

const MenuPage = () => {
  const categories = Object.keys(menuData); // Get category names (keys)

  return (
    <div className='my-60' >
      <CategoryBar categories={categories} />
      <div className="container w-[85vw] mx-auto px-4 ">
        {categories.map((category) => (
          <div key={category} id={category} className="my-8 ">
            <h2 className="text-3xl text-brand-secondary font-bold mb-4">
              {category.replace('-', ' ').toUpperCase()}
            </h2>
            <MenuList items={menuData[category]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
