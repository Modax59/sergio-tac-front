import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Base from '@/layout/base';
import Link from 'next/link';
import Routes from '@/utils/routes';
import { TextField } from '@mui/material';
import { useProductsSearchQuery } from '@/hooks/api/useSearchProducts';
import ProductItemList from '@/layout/products/itemList';

const DetailProduct = () => {
  const [search, setSearch] = useState('');
  const { data, refetch, isLoading } = useProductsSearchQuery(search);
  const router = useRouter();
  const { value } = router.query;

  useEffect(() => {
    // @ts-ignore
    return setSearch(value);
  }, [value]);

  useEffect(() => {
      refetch();
  }, [search]);


  return (
    <Base>
      <div className='p-5 bg-blackst'>
        <div className='text-left'>
          <h1 className='text-gray-300 text-xl'>Rechercher un produit</h1>
          <div className="my-5">
            <input
              ref={input => input && input.focus()}

              type='text'
              className='w-full rounded-lg px-4 py-1 text-sm text-gray-600 focus:outline-none'
              placeholder='Rechercher des articles'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {!isLoading &&
                data?.data?.slice(0,3).map((product: any) => (
                  <ProductItemList
                    key={product.id}
                    // @ts-ignore
                    product={{
                      id: product.id,
                      title: product.attributes.Title,
                      imageSrc: product.attributes.Thumbnail?.data?.attributes?.url,
                      imageAlt: product.attributes.Title,
                      price: product.attributes.Price.toString(),
                      category: product.attributes.Categories.data.attributes.name,
                    }}
                  />
                ))}
              {isLoading && <div className="text-white">Loading...</div>}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default DetailProduct;
