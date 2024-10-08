
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.js"
import './App.css'
import { login, logout } from "./store/authslice.js"
import { Outlet } from "react-router-dom"
import Footer from './components/footer/footer.jsx'
import Header from "./components/header/header.jsx"

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setloading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>

        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />

      </div>
    </div>
  ) : (null);
}

export default App
