import { React, useState } from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';
import LoginPage from './Components/loginPage';

function App() {
  const [isLogin, setisNotLogin] = useState(true)
  return (
    <>
      {!isLogin ? <LoginPage /> :
        <div className="flex w-screen h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col items-start bg-surface overflow-y-auto">
            <SearchBar />
          </div>
        </div>
      }
    </>
  );
}
export default App