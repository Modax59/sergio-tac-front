import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { RadioGroup } from '@headlessui/react';

import Base from '@/layout/base';
import { useProductQuery } from '@/hooks/api/useProductQuery';
import Routes from '@/utils/routes';
import Link from 'next/link';
import env from '@/utils/env';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, refetch, isLoading } = useProductQuery(parseInt(id));

  useEffect(() => {
    if(id) {
      refetch().then(r => console.log(r.data));
    }
  }, [id]);
  //<Link href={Routes.order + id}>Procéder au paiement</Link>

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  return (
  <Base>
    <div className="bg-white">
      <div className="pt-6 mb-10">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-8 lg:grid lg:max-w-7xl lg:grid-cols-3">
          <div className="">
            <h3 className="mt-8">Description</h3>
            <div className="mt-8 space-y-6">
              <p className="text-base text-gray-900">{data?.data?.attributes?.Content}</p>
            </div>
          </div>
          <div className="mx-auto mt-6 flex sm:px-6">
            <div className="">
              <img
                src={
                  env.url2 +
                  data?.data?.attributes?.Thumbnail?.data
                    ?.attributes?.url
                }
                alt={product.images[3].alt}
                className="object-cover object-center"
              />
            </div>
            <div className="ml-3 max-h-96 w-px bg-black"></div>
            <div className="ml-3 w-6/12">
              <ul>
                <li>
                  <img
                    src={env.url2 +
                      data?.data?.attributes?.Pictures?.data[0]
                        ?.attributes?.url}
                    alt={product.images[3].alt}
                    className="my-6 h-full w-10/12 object-cover object-center"
                  />
                </li>
                <li>
                  <img
                    src={env.url2 +
                      data?.data?.attributes?.Pictures?.data[1]
                        ?.attributes?.url}
                    alt={product.images[3].alt}
                    className="my-6 h-full w-10/12 object-cover object-center"
                  />
                </li>
                <li>
                  <img
                    src={env.url2 +
                      data?.data?.attributes?.Pictures?.data[2]
                        ?.attributes?.url}
                    alt={product.images[3].alt}
                    className="my-6 h-full w-10/12 object-cover object-center"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-6">
            <h1 className=" font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              {data?.data?.attributes?.Title}
            </h1>
            <form className="mt-2">
              {/* color */}
              <div>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <p className="mt-4 text-2xl text-gray-900">{data?.data?.attributes?.Price} €</p>
              <p className="mt-2 rounded-sm border-b-2 border-black text-xl">
                Guide des tailles
              </p>
              <div className="">
                <div className="mt-2 w-1/12">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-1">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative rounded-md flex items-center justify-center text-sm hover:bg-gray-50 focus:outline-none sm:flex-1'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="p">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <div
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-indigo-500'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-md pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </div>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-2 rounded-sm border-t-2 border-black">
                <Link href={Routes.order + id}><button className="mt-3 rounded-sm bg-indigo-500 py-2 px-4 font-bold text-white">
                  Acheter l'article
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Base>
  );
};

export default DetailProduct;
