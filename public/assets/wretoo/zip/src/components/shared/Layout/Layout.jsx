import React from 'react'

import Footer from './footer'
import { Outlet } from 'react-router-dom';
import Header from './Header';
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
