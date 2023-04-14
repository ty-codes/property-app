import * as ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import UserProvider from './contexts/UserContext';
import LoggedInProvider from './contexts/LoggedInContext';
import ModalProvider from './contexts/ModalContext';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <ModalProvider>
    <UserProvider>
      <LoggedInProvider>
         <App />
      </LoggedInProvider>
     
    </UserProvider>
  </ModalProvider>
    
    
  // </React.StrictMode>
);

serviceWorkerRegistration.unregister();

