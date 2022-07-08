import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import Base from '@/layout/base';
import { useOrderDetailsQuery } from '@/hooks/api/useOrderDetailsQuery';
import { useQuery } from 'react-query';
import fetchUsers from '@/api/Users/Users';
import AuthMetamask from '@/components/AuthMetamask';
import { useAddress } from '@thirdweb-dev/react';
import { useAssetsQuery } from '@/hooks/api/useAssetsQuery';

const Account = () => {
  const router = useRouter();
  const { id } = router.query;
  const address = useAddress();
  const { data, isLoading } = useOrderDetailsQuery();
  const { data: dataAssets, isLoading: isLoadingAssets } = useAssetsQuery();
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    refetch
  } = useQuery(['users'], () => fetchUsers({ id }), { enabled: false });

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <Base>
      <div className='p-5 bg-blackst'>
        <h1 className='text-xl font-bold text-gray-200'>Mon profile</h1>
        <div className='my-5'></div>
        <div>
          <h2 className='text-base mb-4 text-gray-300 font-bold mx-8'>
            Mes NFTs
          </h2>
          <div className='mx-10 my-5'>
            <AuthMetamask />
            {address && (
              <div className='grid mt-5 grid-cols-3 gap-4 lg:grid-cols-6 xl:grid-cols-5'>
                {dataAssets?.assets?.filter(
                  (asset : any) => asset.image_url != null
                ).map((asset: any) => (
                  <div className='flex flex-col items-center justify-center'>
                    <img
                      src={asset.image_url}
                      alt={asset.name}
                      className='w-full h-auto'
                    />
                    <span className='text-sm text-gray-400'>
                      {asset.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <h2 className='text-base mb-4 text-gray-300 font-bold mx-8'>Mes informations</h2>
        <div className='grid grid-cols-3 mx-10 gap-4'>
          {!isLoadingUser && dataUser && (
            <>
              <div>
                <label className='sr-only text-gray-300' htmlFor='email'>
                  Email
                </label>
                <input
                  className='w-full p-3 text-sm border-gray-200 text-gray-300 shadow rounded-lg'
                  placeholder='Addresse email'
                  type='text'
                  value={dataUser.email}
                  disabled
                  id='email'
                />
              </div>
              <div>
                <label className='sr-only' htmlFor='username'>
                  Email
                </label>
                <input
                  className='w-full p-3 text-sm text-gray-200 shadow rounded-lg'
                  placeholder="Nom d'utilisateur"
                  type='text'
                  disabled
                  value={dataUser.username}
                  id='username'
                />
              </div>
              <div className='text-center my-auto items-center text-gray-300'>Compte crée le :
                {" "+new Date(
                  dataUser.createdAt
                ).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'

                })}</div>
            </>
          )}
        </div>

        <div className='my-5'>
          <h2 className='text-base mb-4 font-bold mx-8 text-gray-300'>
            Historique de mes commandes
          </h2>
          <div className='mx-8'>
            <div className='overflow-hidden overflow-x-auto border border-gray-700 rounded'>
              <table className='min-w-full text-sm divide-y divide-gray-200'>
                <thead>
                <tr className='bg-gray-50'>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                    Numéro de commande
                  </th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                    Produit
                  </th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                    Quantité
                  </th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                    Prix
                  </th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                    Date
                  </th>
                </tr>
                </thead>

                <tbody className='divide-y divide-gray-700'>
                {!isLoading &&
                  data?.data
                    ?.filter(
                      //@ts-ignore
                      (order: any) => order?.attributes.user_id === parseInt(id)
                    ).sort(
                    (a: any, b: any) =>
                      a.id > b.id ? -1 : a.id < b.id ? 1 : 0
                  )
                    .map((order: any) => (
                      <tr key={order.id}>
                        <td className='px-4 py-2 font-medium text-gray-300 whitespace-nowrap'>
                          {order.id}
                        </td>
                        <td className='px-4 py-2 text-gray-300 whitespace-nowrap'>
                          {order?.attributes.product?.data?.attributes?.Title}
                        </td>
                        <td className='px-4 py-2 text-gray-300 whitespace-nowrap'>
                          {order?.attributes.Quantity}
                        </td>
                        <td className='px-4 py-2 text-gray-300 whitespace-nowrap'>
                          {order?.attributes.Price}
                        </td>
                        <td className='px-4 py-2 text-gray-300 whitespace-nowrap'>
                          {new Date(
                            order?.attributes.createdAt
                          ).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))}
                {!isLoading &&
                  data?.data?.filter(
                    //@ts-ignore
                    (order: any) => order?.attributes.user_id === parseInt(id)
                  ).length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className='px-4 py-2 text-gray-700 whitespace-nowrap'
                      >
                        Aucune commande
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Account;
