import React, { useEffect, useReducer } from 'react';

import { useLoginQuery } from '@/hooks/api/useLoginQuery';
import { useUser } from '@/hooks/auth/useUser';
import idUser from '@/hooks/auth/idUser';
import { useRouter } from 'next/router';

import routes from '@/utils/routes';

const initialState = {
  email: '',
  password: ''
};

type Dispatch = (action: {
  type: string;
  fieldName: string;
  payload: string;
}) => void;
type State = { email: string; password: string };

function reducer(state: State, action: Dispatch) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }

    default:
      throw new Error();
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const userProvider = useUser();
  const { refetch, data } = useLoginQuery({
    identifier: state.email,
    password: state.password,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    if (data && data.jwt) {
      userProvider.accessToken = data.jwt;
      localStorage.setItem('access_token', data.jwt);
      // @ts-ignore
      router.push(`${routes.profile}${idUser().id}`);
    }
  }, [data]);

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Connection
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'email',
                      payload: e.target.value
                    })
                  }
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Adresse mail'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Mot de passe
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'password',
                      payload: e.target.value
                    })
                  }
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Mot de passe'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Se souvenir de moi
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Mot de passe oublié?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={(e) => handleSubmit(e)}
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
