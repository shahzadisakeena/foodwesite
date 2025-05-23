import React from 'react';
import { useRouter } from 'next/router';
import menuData from '@/data/menuData';
import MenuList from '@/components/MenuList';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const items = menuData[category];

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">
        {category.replace('-', ' ').toUpperCase()}
      </h1>
      <MenuList items={items} />
    </div>
  );
};

export default CategoryPage;
