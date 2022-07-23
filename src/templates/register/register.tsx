import React, { useReducer } from 'react';

import { useRouter } from 'next/router';

import { useRegisterQuery } from '@/hooks/api/useRegisterQuery';

import routes from '@/utils/routes';
import idUser from '@/hooks/auth/idUser';

const initialState = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirm_password: ''
};

type Dispatch = (action: {
  type: string;
  fieldName: string;
  payload: string;
}) => void;
type State = {
  email: string;
  password: string;
  username: string;
  confirm_password: string;
  name: string;
};

function reducer(state: State, action: Dispatch) {
  // @ts-ignore
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        // @ts-ignore
        [action.fieldName]: action.payload
      };
    }

    default:
      throw new Error();
  }
}

export default function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const { refetch } = useRegisterQuery({
    username: state.username,
    password: state.password,
    email: state.email,
    name: state.name
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.email) {
      refetch().then((r: any) => {
        localStorage.setItem('access_token', r.data.jwt);
        // @ts-ignore
        router.push(`${routes.profile}${idUser().id}`);
      });
    }
  };

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-56'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <p className='text-center'>Vous possédez déjà un compte ? Connectez-vous ici !</p>
            <h2 className='mt-6 text-center text-3xl text-gray-900'>
              Inscription
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='mb-4'>
                  <label htmlFor='nom' className='sr-only'>
                    Nom
                  </label>
                  <input
                    id='nom'
                    name='nom'
                    type='text'
                    autoComplete='nom'
                    required
                    className='relative block w-full appearance-none rounded-none border border-black px-3 py-2 text-gray-900 placeholder:text-gray-700 focus:z-10 focus:outline-none sm:text-sm'
                    placeholder='Nom'
                    value={state.name}
                    onChange={(e) =>
                      dispatch({
                        // @ts-ignore
                        type: 'field',
                        fieldName: 'name',
                        payload: e.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor='identifiant' className='sr-only'>
                    Identifiant
                  </label>
                  <input
                    id='identifiant'
                    name='identifiant'
                    type='text'
                    autoComplete='nom'
                    required
                    className='relative block w-full appearance-none rounded-none border border-black px-3 py-2 text-gray-900 placeholder:text-gray-700 focus:z-10 focus:outline-none sm:text-sm'
                    placeholder='Identifiant'
                    value={state.username}
                    onChange={(e) =>
                      dispatch({
                        // @ts-ignore
                        type: 'field',
                        fieldName: 'username',
                        payload: e.target.value
                      })
                    }
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label htmlFor='email-address' className='sr-only'>
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-none border border-black px-3 py-2 text-gray-900 placeholder:text-gray-700 focus:z-10 focus:outline-none sm:text-sm'
                  placeholder='Adresse mail'
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      // @ts-ignore
                      type: 'field',
                      fieldName: 'email',
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='sr-only'>
                  Mot de passe
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none border border-black px-3 py-2 text-gray-900 placeholder:text-gray-700 focus:z-10 focus:outline-none sm:text-sm'
                  placeholder='Mot de passe'
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      // @ts-ignore
                      type: 'field',
                      fieldName: 'password',
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor='forgetpassword' className='sr-only'>
                  Confirmer votre mot de passe
                </label>
                <input
                  id='forgetpassword'
                  name='forgetpassword'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none border border-black px-3 py-2 text-gray-900 placeholder:text-gray-700 focus:z-10 focus:outline-none sm:text-sm'
                  placeholder='Confirmer votre mot de passe'
                  value={state.confirm_password}
                  onChange={(e) =>
                    dispatch({
                      // @ts-ignore
                      type: 'field',
                      fieldName: 'confirm_password',
                      payload: e.target.value
                    })
                  }
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                onClick={(e) => handleSubmit(e)}
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2'
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
