import { usePixlsPrice} from '../../hooks'
import GlobalHooksContext from './GlobalHooksContext';

const GlobalHooksProvider = ({ children }) => {
 
  const pixlsPrice = usePixlsPrice();

  // TODO: change to rlp
 

  return (
    <GlobalHooksContext.Provider
      value={{
        
        pixlsPrice
      }}
    >
      {children}
    </GlobalHooksContext.Provider>
  );
};

export default GlobalHooksProvider;
