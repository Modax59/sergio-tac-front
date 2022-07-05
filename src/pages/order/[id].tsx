import React, { useEffect } from "react";

import { useRouter } from "next/router";

import Base from "@/layout/base";
import { useProductsQuery } from "@/hooks/api/useProductsQuery";
import env from "@/utils/env";
import { useQuery } from "react-query";
import fetchProduct from "@/api/Product/Product";
import fetchPostOrders from "@/api/Order/SendOrder";
import jwtDecode from "jwt-decode";
import e from "express";
import Routes from "@/utils/routes";

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  // @ts-ignore
  const { data, isLoading, refetch } = useProductsQuery(parseInt(id));
  const { refetch: orderRefetch, isLoading: loadingSend, isSuccess } = useQuery(
    ["ordersSend"],
    () =>
      fetchPostOrders({
        quantity: 1,
        price: data?.data?.attributes?.Price,
        product: parseInt(id),
        user: jwtDecode(localStorage.getItem("access_token")).id,
      }),
    { enabled: false }
  );
  console.log(data);

  useEffect(() => {
    if (id) {
      refetch();
    }
    if (isSuccess) {
      router.push(Routes.profile+jwtDecode(localStorage.getItem("access_token")).id);
    }
  }, [id, isSuccess]);

  if (isLoading) {
    return <div>Loading. ..</div>;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    orderRefetch();
  };

  return (
    <Base>
      <div className="m-5">
        <section>
          <h1 className="sr-only">Checkout</h1>

          <div className="relative mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="py-12 bg-gray-50 md:py-24">
                <div className="max-w-lg px-4 mx-auto lg:px-8">
                  <div className="flex items-center">
                    <h2 className="ml-4 font-medium">Panier</h2>
                  </div>

                  <div className="mt-8">
                    <p className="text-2xl font-medium tracking-tight">
                      {data?.data?.attributes?.Price} €
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Pour l'achat de :
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        <li className="flex items-center justify-between py-4">
                          <div className="flex items-start">
                            <img
                              className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                              src={
                                env.url2 +
                                data?.data?.attributes?.Thumbnail?.data
                                  ?.attributes?.url
                              }
                              alt=""
                            />

                            <div className="ml-4">
                              <p className="text-sm">
                                {data?.data?.attributes?.Title}
                              </p>

                              <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                <div>
                                  <dt className="inline">Taille: </dt>
                                  <dd className="inline">
                                    {data?.data?.attributes?.Size}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm">
                              {data?.data?.attributes?.Price} €
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-12 bg-white md:py-24">
                <div className="max-w-lg px-4 mx-auto lg:px-8">
                  <form className="grid grid-cols-6 gap-4">
                    <fieldset className="col-span-6">
                      <legend className="block mb-1 text-sm text-gray-600">
                        Carte bancaire
                      </legend>

                      <div className="-space-y-px bg-white rounded-lg shadow-sm">
                        <div>
                          <label className="sr-only">Numéro de carte</label>

                          <input
                            className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                            type="text"
                            name="card-number"
                            id="card-number"
                            placeholder="Numéro de carte"
                            required
                          />
                        </div>

                        <div className="flex -space-x-px">
                          <div className="flex-1">
                            <label className="sr-only">Date expiration</label>

                            <input
                              className="border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                              type="text"
                              name="card-expiration-date"
                              id="card-expiration-date"
                              placeholder="MM / YY"
                              required
                            />
                          </div>

                          <div className="flex-1">
                            <label className="sr-only">CVC</label>

                            <input
                              className="border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                              type="text"
                              name="card-cvc"
                              id="card-cvc"
                              placeholder="CVC"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="col-span-6">
                      <button
                        onClick={(e) => handleSubmit(e)}
                        className={`rounded-lg ${isSuccess ? "bg-green-500" : "bg-black "} text-sm text-white p-2.5 transition 1s w-full block`}
                        type="submit"
                      >
                        {loadingSend ? ('Chargement...') : "Payer"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default DetailProduct;
