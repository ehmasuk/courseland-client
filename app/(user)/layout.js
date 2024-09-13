import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideCart from '@/components/SideCart'
import React from 'react'

function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <SideCart/>
        <Footer/>
    </div>
  )
}

export default Layout