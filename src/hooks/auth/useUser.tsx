import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type UseUserProps = {
  children: ReactElement;
};

type UserContextType = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({
  accessToken: '',
  setAccessToken: () => {},
});

export function UserProvider(props: UseUserProps) {
  const [accessToken, setAccessToken] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('access_token')) ||
      ''
  );

  function handleAccessTokenChange() {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
    } else if (!accessToken) {
      localStorage.removeItem('access_token');
    }
  }

  useEffect(() => {
    handleAccessTokenChange();
  }, [accessToken]);

  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
