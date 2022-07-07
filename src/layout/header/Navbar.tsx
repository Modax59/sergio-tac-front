import { Fragment } from 'react';


import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import AuthMetamask from '@/components/AuthMetamask';
import isAuth from '@/hooks/auth/isAuth';
import routes from '@/utils/routes';
import NavbarTop from './NavbarTop';
import { useRouter } from 'next/router';
import idUser from '@/hooks/auth/idUser';

import logo from "../../assets/images/logo.png";
import Image from 'next/image';

const navigation = [
  { name: 'Homme', href: '#', current: false },
  { name: 'Femme', href: '#', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const router = useRouter();

  return (
    <div>
      <NavbarTop />
      <Disclosure as='nav' className='bg-blackst'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex shrink-0 items-center'>
                    <img
                      className='h-5 w-auto'
                      src={logo.src}
                      alt='Logo'
                    />
                  </div>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300  hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex flex-1 rounded-md ring-teal-500 focus-within:ring-2'>
                  <input
                    type='text'
                    className='w-full rounded-lg px-4 py-1 text-sm text-gray-600 focus:outline-none'
                    placeholder='Rechercher des articles'
                  />
                </div>
                <div
                  className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3 px-3 py-2'>
                    <div>
                      <Menu.Button className='rounded-full p-1 text-gray-400 hover:text-white'>
                        <span className='sr-only'>Open user menu</span>

                        <BiUser className=' h-6 w-6' aria-hidden='true' />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items
                        className='absolute z-50 right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none'>
                        {!isAuth() && (<><Menu.Item>
                          {({ active }) => (
                            <Link passHref={true} href={routes.login}>
                              <a
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Connexion
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link href={routes.register}>
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Inscription
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </>)}
                        {isAuth() && (<><Menu.Item>
                          {({ active }) => (
                            <Link passHref={true} href={
                              // @ts-ignore
                              routes.profile+idUser().id
                            }>
                              <a
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Mon compte
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (

                                <button onClick={() => {
                                  //remove access_token from localStorage
                                  localStorage.removeItem('access_token');
                                  //redirect to login page
                                  router.push(routes.login)
                                }}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-red-600'
                                  )}
                                >
                                  Déconnexion
                                </button>

                            )}
                          </Menu.Item>
                        </>)}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className='px-3 py-2'>
                  <button
                    type='button'
                    className='rounded-full p-1 px-3 py-2 text-gray-400 hover:text-white'
                  >
                    <span className='sr-only'>View notifications</span>
                    <AiOutlineHeart className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='px-3 py-2'>
                  <a
                    href='#'
                    className='rounded-full p-1 text-gray-400 hover:text-white'
                  >
                    <span className='sr-only'>Panier</span>

                    <AiOutlineShoppingCart
                      className=' h-6 w-6'
                      aria-hidden='true'
                    />
                  </a>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-2 pt-2 pb-3'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
