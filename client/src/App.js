import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import {routes} from './routes'
import cookie from 'react-cookies'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userId = cookie.load('userId')
    if(userId){
      setUser(userId)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            {
              routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}/>
              ))
            }
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
